# Finance Planner — Expo SDK 35

Aplicación móvil de finanzas personales inspirada en una plantilla mensual tipo Excel ("Planeador financiero GRATU"). Permite manejar ingresos, pagos programados, gastos, ahorros, deudas, transacciones y visualizar reportes y un calendario financiero, con persistencia local en archivos JSON.

> **Stack 2020 a propósito.** Este proyecto usa Expo SDK 35, React 16.8.3, NativeBase v2, Redux + redux-thunk y JavaScript puro (sin TypeScript) para mantener compatibilidad con el ecosistema de la época.

---

## 📋 Tabla de contenidos

1. [Stack](#-stack)
2. [Funcionalidades](#-funcionalidades)
3. [Arquitectura](#-arquitectura)
4. [Instalación](#-instalación)
5. [Scripts](#-scripts)
6. [Estructura de datos](#-estructura-de-datos)
7. [Cálculos financieros](#-cálculos-financieros)
8. [Roadmap por meses](#-roadmap-por-meses)
9. [Licencia](#-licencia)

---

## 🛠 Stack

- **Expo SDK 35** + React Native (`https://github.com/expo/react-native/archive/sdk-35.0.0.tar.gz`)
- **React 16.8.3**
- **JavaScript puro** (sin TypeScript)
- **Redux 4** + **redux-thunk 2**
- **NativeBase v2.13.8**
- **Moment.js 2.24**
- **PropTypes** en todos los componentes
- Persistencia local con **expo-file-system** (JSON único `finance-data.json` en `documentDirectory`)

---

## ✨ Funcionalidades

| Pantalla | Descripción |
|---|---|
| **Resumen (Dashboard)** | Tarjetas con ingresos reales, gastos totales, ahorrado, deudas pagadas, disponible para gastar/presupuestar, % usado y últimas 5 transacciones |
| **Ingresos** | CRUD de ingresos del mes con valor esperado vs real |
| **Pagos programados** | CRUD de pagos con categoría, switch "pagado", diferencia presupuesto/real |
| **Gastos mensuales** | CRUD de gastos presupuestados, % sobre total real |
| **Movimientos** | Registro de transacciones con filtros por tipo y categoría, totales por categoría |
| **Ahorros** | Metas con barra de progreso (`<View>`) y fecha objetivo |
| **Deudas** | Saldo pendiente, pago mensual, registrar pago abre form |
| **Reportes** | 5 secciones con barras manuales: ingresos vs gastos, presupuesto vs real, gasto por categoría, ahorros, deudas |
| **Calendario** | Grid mensual manual con marcadores por día (verde/rojo/azul) y detalle al tocar |

Selector de mes (Ene–May 2020) en la cabecera del Dashboard.

---

## 🏗 Arquitectura

```
src/
  components/
    common/        AppHeader, AppCard, AppButton, MoneyText, SectionTitle,
                   EmptyState, BarRow, BottomTabs, MonthSwitcher
    forms/         IncomeForm, PaymentForm, ExpenseForm,
                   SavingForm, DebtForm, TransactionForm
    lists/         IncomeList, PaymentList, ExpenseList,
                   SavingList, DebtList, TransactionList
  screens/         DashboardScreen, IncomeScreen, ScheduledPaymentsScreen,
                   MonthlyExpensesScreen, TransactionsScreen, SavingsScreen,
                   DebtsScreen, ReportsScreen, CalendarScreen, RootScreen
  store/
    index.js, rootReducer.js, persistHelper.js
    modules/{app, incomes, payments, expenses,
             savings, debts, transactions}/
                   <module>Types.js | <module>Reducer.js | <module>Actions.js
  services/        storageService, financeCalculator, dateService, idService
  constants/       colors, categories, months, demoData
  utils/           money, formatters, validators
App.js
```

**Reglas:**
- Un componente por archivo
- Lógica financiera fuera de los componentes (en `services/financeCalculator.js`)
- Forms separados de pantallas, listas separadas de pantallas
- PropTypes en todo lo que reciba props
- Redux para estado global; thunks para acciones asíncronas

---

## 🚀 Instalación

```bash
git clone <repo-url>
cd finance-planner
npm install
```

> Requiere Node 10/12 (compatible con Expo CLI 3) y Expo CLI:
> ```bash
> npm install -g expo-cli@3
> ```

---

## 📜 Scripts

```bash
npm start          # Inicia Expo dev server
npm run android    # Lanza en emulador / dispositivo Android
npm run ios        # Lanza en simulador iOS
npm run web        # Lanza versión web (limitada por NativeBase v2)
```

---

## 💾 Estructura de datos

Carpeta persistida: `${FileSystem.documentDirectory}finance-data/`

```
finance-data/
  settings.json
  2020-01.json
  2020-02.json
  2020-03.json
  ...
```

`settings.json`:
```json
{ "currency": "COP", "currentMonth": "2020-01", "userName": "Miguel" }
```

`2020-01.json` (un archivo por mes):
```json
{
  "incomes": [],
  "payments": [],
  "expenses": [],
  "savings": [],
  "debts": [],
  "transactions": []
}
```

Cada mutación llama a `persistState()` (en `src/store/persistHelper.js`) que escribe SOLO el archivo del mes activo y `settings.json`, manteniendo los demás meses intactos en disco.

### Entidades

| Entidad | Campos |
|---|---|
| Income | `id, name, incomeDate, expectedAmount, realAmount, startDate, notes, createdAt, updatedAt` |
| Payment | `id, name, date, budgetAmount, realAmount, category, isPaid, createdAt, updatedAt` |
| Expense | `id, name, budgetAmount, realAmount, category, createdAt, updatedAt` |
| Saving | `id, name, budgetAmount, realAmount, targetDate, createdAt, updatedAt` |
| Debt | `id, name, monthlyBudget, realPayment, pendingBalance, notes, createdAt, updatedAt` |
| Transaction | `id, date, total, type, category, description, createdAt, updatedAt` |

---

## 🧮 Cálculos financieros

Funciones puras en `src/services/financeCalculator.js`:

```text
Ingresos reales      = Σ income.realAmount
Gastos totales       = Σ payments.realAmount + Σ expenses.realAmount
                       + Σ transactions[type='expense'].total
Disponible gastar    = Ingresos reales - Gastos totales
                       - Σ savings.realAmount - Σ debts.realPayment
Disponible presup.   = Ingresos reales - (Σ payments.budgetAmount
                       + Σ expenses.budgetAmount + Σ savings.budgetAmount
                       + Σ debts.monthlyBudget)
Diferencia           = budget - real
% por categoría      = gasto_categoría / gasto_total * 100
```

API exportada:

```
calculateTotalIncomes, calculateTotalRealIncomes, calculateTotalPayments,
calculateTotalExpenses, calculateTotalSavings, calculateTotalDebtsPaid,
calculateAvailableToSpend, calculateAvailableToBudget,
calculateBudgetDifference, calculateExpensePercentage,
calculateCategoryTotals, calculateMonthlySummary
```

## 📝 Licencia

MIT — proyecto de portafolio.
Autor: Miguel Angel Mendoza Cardenas · miigangls@gmail.com
