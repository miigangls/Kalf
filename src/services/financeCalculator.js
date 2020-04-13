const sumKey = (arr, key) =>
  (arr || []).reduce((a, x) => a + (Number(x[key]) || 0), 0);

export const calculateTotalIncomes = (incomes) =>
  sumKey(incomes, "expectedAmount");

export const calculateTotalRealIncomes = (incomes) =>
  sumKey(incomes, "realAmount");

export const calculateTotalPayments = (payments) =>
  sumKey(payments, "realAmount");

export const calculateTotalExpenses = (expenses) =>
  sumKey(expenses, "realAmount");

export const calculateTotalSavings = (savings) =>
  sumKey(savings, "realAmount");

export const calculateTotalDebtsPaid = (debts) =>
  sumKey(debts, "realPayment");

export const calculateAvailableToSpend = (data) => {
  const d = data || {};
  const totalRealIncomes = calculateTotalRealIncomes(d.incomes || []);
  const totalPayments = calculateTotalPayments(d.payments || []);
  const totalExpenses = calculateTotalExpenses(d.expenses || []);
  const totalSavings = calculateTotalSavings(d.savings || []);
  const totalDebtsPaid = calculateTotalDebtsPaid(d.debts || []);
  const transactionExpenses = (d.transactions || [])
    .filter((t) => t.type === "expense")
    .reduce((a, t) => a + (Number(t.total) || 0), 0);
  return (
    totalRealIncomes -
    (totalPayments + totalExpenses + transactionExpenses) -
    totalSavings -
    totalDebtsPaid
  );
};

export const calculateAvailableToBudget = (data) => {
  const d = data || {};
  const totalRealIncomes = calculateTotalRealIncomes(d.incomes || []);
  const budgetPayments = sumKey(d.payments, "budgetAmount");
  const budgetExpenses = sumKey(d.expenses, "budgetAmount");
  const budgetSavings = sumKey(d.savings, "budgetAmount");
  const budgetDebts = sumKey(d.debts, "monthlyBudget");
  return (
    totalRealIncomes -
    (budgetPayments + budgetExpenses + budgetSavings + budgetDebts)
  );
};

export const calculateBudgetDifference = (budget, real) =>
  (Number(budget) || 0) - (Number(real) || 0);

export const calculateExpensePercentage = (amount, total) =>
  total > 0 ? (amount / total) * 100 : 0;

export const calculateCategoryTotals = (transactions) => {
  const result = {};
  (transactions || [])
    .filter((t) => t.type === "expense")
    .forEach((t) => {
      const cat = t.category || "uncategorized";
      result[cat] = (result[cat] || 0) + (Number(t.total) || 0);
    });
  return result;
};

export const calculateMonthlySummary = (monthData) => {
  const d = monthData || {};
  return {
    totalIncomes: calculateTotalIncomes(d.incomes || []),
    totalRealIncomes: calculateTotalRealIncomes(d.incomes || []),
    totalPayments: calculateTotalPayments(d.payments || []),
    totalExpenses: calculateTotalExpenses(d.expenses || []),
    totalSavings: calculateTotalSavings(d.savings || []),
    totalDebtsPaid: calculateTotalDebtsPaid(d.debts || []),
    availableToSpend: calculateAvailableToSpend(d),
    availableToBudget: calculateAvailableToBudget(d),
  };
};
