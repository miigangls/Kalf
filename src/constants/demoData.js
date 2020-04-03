const NOW = "2020-01-01T08:00:00.000Z";

const demoData = {
  settings: {
    currency: "COP",
    currentMonth: "2020-01",
    userName: "Miguel"
  },
  months: {
    "2020-01": {
      incomes: [
        {
          id: "income_001",
          name: "Salario Empresa",
          incomeDate: "2020-01-15",
          expectedAmount: 3500000,
          realAmount: 3500000,
          startDate: "2019-06-01",
          notes: "Pago quincenal principal",
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "income_002",
          name: "Freelance Diseño",
          incomeDate: "2020-01-25",
          expectedAmount: 800000,
          realAmount: 750000,
          startDate: "2020-01-05",
          notes: "Proyecto cliente externo",
          createdAt: NOW,
          updatedAt: NOW
        }
      ],
      payments: [
        {
          id: "payment_001",
          name: "Arriendo",
          date: "2020-01-05",
          budgetAmount: 1200000,
          realAmount: 1200000,
          category: "Hogar",
          isPaid: true,
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "payment_002",
          name: "Internet y TV",
          date: "2020-01-10",
          budgetAmount: 130000,
          realAmount: 130000,
          category: "Servicios",
          isPaid: true,
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "payment_003",
          name: "Energía",
          date: "2020-01-18",
          budgetAmount: 90000,
          realAmount: 95000,
          category: "Servicios",
          isPaid: true,
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "payment_004",
          name: "Gimnasio",
          date: "2020-01-20",
          budgetAmount: 80000,
          realAmount: 0,
          category: "Salud",
          isPaid: false,
          createdAt: NOW,
          updatedAt: NOW
        }
      ],
      expenses: [
        {
          id: "expense_001",
          name: "Mercado",
          budgetAmount: 600000,
          realAmount: 650000,
          category: "Alimentación",
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "expense_002",
          name: "Transporte público",
          budgetAmount: 150000,
          realAmount: 140000,
          category: "Transporte",
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "expense_003",
          name: "Restaurantes",
          budgetAmount: 200000,
          realAmount: 230000,
          category: "Entretenimiento",
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "expense_004",
          name: "Curso online",
          budgetAmount: 180000,
          realAmount: 180000,
          category: "Educación",
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "expense_005",
          name: "Ropa",
          budgetAmount: 120000,
          realAmount: 90000,
          category: "Ropa",
          createdAt: NOW,
          updatedAt: NOW
        }
      ],
      savings: [
        {
          id: "saving_001",
          name: "Fondo de emergencia",
          budgetAmount: 500000,
          realAmount: 500000,
          targetDate: "2020-12-31",
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "saving_002",
          name: "Viaje fin de año",
          budgetAmount: 300000,
          realAmount: 250000,
          targetDate: "2020-11-30",
          createdAt: NOW,
          updatedAt: NOW
        }
      ],
      debts: [
        {
          id: "debt_001",
          name: "Tarjeta de crédito",
          monthlyBudget: 400000,
          realPayment: 400000,
          pendingBalance: 2800000,
          notes: "Cuota mensual mínima",
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "debt_002",
          name: "Préstamo estudiantil",
          monthlyBudget: 250000,
          realPayment: 250000,
          pendingBalance: 5500000,
          notes: "Pago automático",
          createdAt: NOW,
          updatedAt: NOW
        }
      ],
      transactions: [
        {
          id: "transaction_001",
          date: "2020-01-15",
          total: 3500000,
          type: "income",
          category: "Ingreso",
          description: "Salario quincena enero",
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "transaction_002",
          date: "2020-01-05",
          total: 1200000,
          type: "expense",
          category: "Hogar",
          description: "Pago arriendo enero",
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "transaction_003",
          date: "2020-01-08",
          total: 220000,
          type: "expense",
          category: "Alimentación",
          description: "Mercado quincenal",
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "transaction_004",
          date: "2020-01-12",
          total: 70000,
          type: "expense",
          category: "Transporte",
          description: "Recarga tarjeta transporte",
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "transaction_005",
          date: "2020-01-18",
          total: 500000,
          type: "saving",
          category: "Ahorro",
          description: "Aporte fondo de emergencia",
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "transaction_006",
          date: "2020-01-20",
          total: 400000,
          type: "debt",
          category: "Deuda",
          description: "Pago tarjeta de crédito",
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "transaction_007",
          date: "2020-01-22",
          total: 95000,
          type: "expense",
          category: "Entretenimiento",
          description: "Cena restaurante",
          createdAt: NOW,
          updatedAt: NOW
        },
        {
          id: "transaction_008",
          date: "2020-01-25",
          total: 750000,
          type: "income",
          category: "Ingreso",
          description: "Pago freelance diseño",
          createdAt: NOW,
          updatedAt: NOW
        }
      ]
    },
    "2020-02": {
      incomes: [
        {
          id: "income_003",
          name: "Salario Empresa",
          incomeDate: "2020-02-15",
          expectedAmount: 3500000,
          realAmount: 3500000,
          startDate: "2019-06-01",
          notes: "Pago quincenal principal",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "income_004",
          name: "Freelance Diseño",
          incomeDate: "2020-02-26",
          expectedAmount: 800000,
          realAmount: 820000,
          startDate: "2020-01-05",
          notes: "Segundo entregable cliente externo",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        }
      ],
      payments: [
        {
          id: "payment_005",
          name: "Arriendo",
          date: "2020-02-05",
          budgetAmount: 1200000,
          realAmount: 1200000,
          category: "Hogar",
          isPaid: true,
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "payment_006",
          name: "Internet y TV",
          date: "2020-02-10",
          budgetAmount: 130000,
          realAmount: 135000,
          category: "Servicios",
          isPaid: true,
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "payment_007",
          name: "Energía",
          date: "2020-02-18",
          budgetAmount: 95000,
          realAmount: 102000,
          category: "Servicios",
          isPaid: true,
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "payment_008",
          name: "Gimnasio",
          date: "2020-02-20",
          budgetAmount: 80000,
          realAmount: 80000,
          category: "Salud",
          isPaid: true,
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        }
      ],
      expenses: [
        {
          id: "expense_006",
          name: "Mercado",
          budgetAmount: 650000,
          realAmount: 670000,
          category: "Alimentación",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "expense_007",
          name: "Transporte público",
          budgetAmount: 150000,
          realAmount: 155000,
          category: "Transporte",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "expense_008",
          name: "Restaurantes",
          budgetAmount: 220000,
          realAmount: 210000,
          category: "Entretenimiento",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "expense_009",
          name: "Farmacia",
          budgetAmount: 100000,
          realAmount: 115000,
          category: "Salud",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "expense_010",
          name: "Ropa",
          budgetAmount: 130000,
          realAmount: 145000,
          category: "Ropa",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        }
      ],
      savings: [
        {
          id: "saving_003",
          name: "Fondo de emergencia",
          budgetAmount: 500000,
          realAmount: 520000,
          targetDate: "2020-12-31",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "saving_004",
          name: "Viaje fin de año",
          budgetAmount: 300000,
          realAmount: 300000,
          targetDate: "2020-11-30",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        }
      ],
      debts: [
        {
          id: "debt_003",
          name: "Tarjeta de crédito",
          monthlyBudget: 400000,
          realPayment: 400000,
          pendingBalance: 2400000,
          notes: "Cuota mensual mínima",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "debt_004",
          name: "Préstamo estudiantil",
          monthlyBudget: 250000,
          realPayment: 250000,
          pendingBalance: 5250000,
          notes: "Pago automático",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        }
      ],
      transactions: [
        {
          id: "transaction_009",
          date: "2020-02-15",
          total: 3500000,
          type: "income",
          category: "Ingreso",
          description: "Salario quincena febrero",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "transaction_010",
          date: "2020-02-05",
          total: 1200000,
          type: "expense",
          category: "Hogar",
          description: "Pago arriendo febrero",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "transaction_011",
          date: "2020-02-09",
          total: 240000,
          type: "expense",
          category: "Alimentación",
          description: "Mercado quincenal",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "transaction_012",
          date: "2020-02-13",
          total: 75000,
          type: "expense",
          category: "Transporte",
          description: "Recarga tarjeta transporte",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "transaction_013",
          date: "2020-02-17",
          total: 520000,
          type: "saving",
          category: "Ahorro",
          description: "Aporte fondo de emergencia",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "transaction_014",
          date: "2020-02-20",
          total: 400000,
          type: "debt",
          category: "Deuda",
          description: "Pago tarjeta de crédito",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "transaction_015",
          date: "2020-02-22",
          total: 60000,
          type: "expense",
          category: "Salud",
          description: "Compra medicamentos",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        },
        {
          id: "transaction_016",
          date: "2020-02-26",
          total: 820000,
          type: "income",
          category: "Ingreso",
          description: "Pago freelance diseño",
          createdAt: "2020-02-01T10:00:00",
          updatedAt: "2020-02-01T10:00:00"
        }
      ]
    },
    "2020-03": {
      incomes: [
        {
          id: "income_005",
          name: "Salario Empresa",
          incomeDate: "2020-03-15",
          expectedAmount: 3600000,
          realAmount: 3600000,
          startDate: "2019-06-01",
          notes: "Aumento de salario aplicado",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "income_006",
          name: "Freelance Diseño",
          incomeDate: "2020-03-25",
          expectedAmount: 850000,
          realAmount: 870000,
          startDate: "2020-01-05",
          notes: "Tercer entregable cliente externo",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        }
      ],
      payments: [
        {
          id: "payment_009",
          name: "Arriendo",
          date: "2020-03-05",
          budgetAmount: 1250000,
          realAmount: 1250000,
          category: "Hogar",
          isPaid: true,
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "payment_010",
          name: "Internet y TV",
          date: "2020-03-10",
          budgetAmount: 135000,
          realAmount: 135000,
          category: "Servicios",
          isPaid: true,
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "payment_011",
          name: "Energía",
          date: "2020-03-18",
          budgetAmount: 100000,
          realAmount: 110000,
          category: "Servicios",
          isPaid: true,
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "payment_012",
          name: "Gimnasio",
          date: "2020-03-20",
          budgetAmount: 80000,
          realAmount: 80000,
          category: "Salud",
          isPaid: true,
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        }
      ],
      expenses: [
        {
          id: "expense_011",
          name: "Mercado",
          budgetAmount: 680000,
          realAmount: 720000,
          category: "Alimentación",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "expense_012",
          name: "Transporte público",
          budgetAmount: 160000,
          realAmount: 150000,
          category: "Transporte",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "expense_013",
          name: "Restaurantes",
          budgetAmount: 230000,
          realAmount: 250000,
          category: "Entretenimiento",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "expense_014",
          name: "Artículos de aseo",
          budgetAmount: 90000,
          realAmount: 95000,
          category: "Hogar",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "expense_015",
          name: "Imprevistos",
          budgetAmount: 150000,
          realAmount: 170000,
          category: "Otros",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        }
      ],
      savings: [
        {
          id: "saving_005",
          name: "Fondo de emergencia",
          budgetAmount: 550000,
          realAmount: 550000,
          targetDate: "2020-12-31",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "saving_006",
          name: "Viaje fin de año",
          budgetAmount: 320000,
          realAmount: 280000,
          targetDate: "2020-11-30",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        }
      ],
      debts: [
        {
          id: "debt_005",
          name: "Tarjeta de crédito",
          monthlyBudget: 400000,
          realPayment: 450000,
          pendingBalance: 1950000,
          notes: "Abono extra este mes",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "debt_006",
          name: "Préstamo estudiantil",
          monthlyBudget: 250000,
          realPayment: 250000,
          pendingBalance: 5000000,
          notes: "Pago automático",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        }
      ],
      transactions: [
        {
          id: "transaction_017",
          date: "2020-03-15",
          total: 3600000,
          type: "income",
          category: "Ingreso",
          description: "Salario quincena marzo",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "transaction_018",
          date: "2020-03-05",
          total: 1250000,
          type: "expense",
          category: "Hogar",
          description: "Pago arriendo marzo",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "transaction_019",
          date: "2020-03-08",
          total: 250000,
          type: "expense",
          category: "Alimentación",
          description: "Mercado quincenal",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "transaction_020",
          date: "2020-03-11",
          total: 75000,
          type: "expense",
          category: "Transporte",
          description: "Gasolina y peajes",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "transaction_021",
          date: "2020-03-17",
          total: 550000,
          type: "saving",
          category: "Ahorro",
          description: "Aporte fondo de emergencia",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "transaction_022",
          date: "2020-03-20",
          total: 450000,
          type: "debt",
          category: "Deuda",
          description: "Pago tarjeta de crédito con extra",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "transaction_023",
          date: "2020-03-23",
          total: 120000,
          type: "expense",
          category: "Entretenimiento",
          description: "Cine y salida con amigos",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        },
        {
          id: "transaction_024",
          date: "2020-03-25",
          total: 870000,
          type: "income",
          category: "Ingreso",
          description: "Pago freelance diseño",
          createdAt: "2020-03-01T10:00:00",
          updatedAt: "2020-03-01T10:00:00"
        }
      ]
    },
    "2020-04": {
      incomes: [
        {
          id: "income_007",
          name: "Salario Empresa",
          incomeDate: "2020-04-15",
          expectedAmount: 3600000,
          realAmount: 3600000,
          startDate: "2019-06-01",
          notes: "Pago quincenal principal",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "income_008",
          name: "Freelance Diseño",
          incomeDate: "2020-04-24",
          expectedAmount: 900000,
          realAmount: 780000,
          startDate: "2020-01-05",
          notes: "Cliente pagó parcial",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        }
      ],
      payments: [
        {
          id: "payment_013",
          name: "Arriendo",
          date: "2020-04-05",
          budgetAmount: 1250000,
          realAmount: 1250000,
          category: "Hogar",
          isPaid: true,
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "payment_014",
          name: "Internet y TV",
          date: "2020-04-10",
          budgetAmount: 135000,
          realAmount: 135000,
          category: "Servicios",
          isPaid: true,
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "payment_015",
          name: "Energía",
          date: "2020-04-18",
          budgetAmount: 110000,
          realAmount: 118000,
          category: "Servicios",
          isPaid: true,
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "payment_016",
          name: "Seguro médico",
          date: "2020-04-22",
          budgetAmount: 180000,
          realAmount: 180000,
          category: "Salud",
          isPaid: true,
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        }
      ],
      expenses: [
        {
          id: "expense_016",
          name: "Mercado",
          budgetAmount: 700000,
          realAmount: 740000,
          category: "Alimentación",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "expense_017",
          name: "Transporte público",
          budgetAmount: 150000,
          realAmount: 130000,
          category: "Transporte",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "expense_018",
          name: "Streaming",
          budgetAmount: 60000,
          realAmount: 65000,
          category: "Entretenimiento",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "expense_019",
          name: "Reparaciones hogar",
          budgetAmount: 200000,
          realAmount: 250000,
          category: "Hogar",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "expense_020",
          name: "Regalos",
          budgetAmount: 100000,
          realAmount: 110000,
          category: "Otros",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        }
      ],
      savings: [
        {
          id: "saving_007",
          name: "Fondo de emergencia",
          budgetAmount: 550000,
          realAmount: 480000,
          targetDate: "2020-12-31",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "saving_008",
          name: "Viaje fin de año",
          budgetAmount: 320000,
          realAmount: 320000,
          targetDate: "2020-11-30",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        }
      ],
      debts: [
        {
          id: "debt_007",
          name: "Tarjeta de crédito",
          monthlyBudget: 400000,
          realPayment: 400000,
          pendingBalance: 1550000,
          notes: "Cuota mensual mínima",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "debt_008",
          name: "Préstamo estudiantil",
          monthlyBudget: 250000,
          realPayment: 250000,
          pendingBalance: 4750000,
          notes: "Pago automático",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        }
      ],
      transactions: [
        {
          id: "transaction_025",
          date: "2020-04-15",
          total: 3600000,
          type: "income",
          category: "Ingreso",
          description: "Salario quincena abril",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "transaction_026",
          date: "2020-04-05",
          total: 1250000,
          type: "expense",
          category: "Hogar",
          description: "Pago arriendo abril",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "transaction_027",
          date: "2020-04-09",
          total: 260000,
          type: "expense",
          category: "Alimentación",
          description: "Mercado quincenal",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "transaction_028",
          date: "2020-04-12",
          total: 65000,
          type: "expense",
          category: "Transporte",
          description: "Recarga tarjeta transporte",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "transaction_029",
          date: "2020-04-17",
          total: 480000,
          type: "saving",
          category: "Ahorro",
          description: "Aporte fondo de emergencia",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "transaction_030",
          date: "2020-04-20",
          total: 400000,
          type: "debt",
          category: "Deuda",
          description: "Pago tarjeta de crédito",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "transaction_031",
          date: "2020-04-21",
          total: 250000,
          type: "expense",
          category: "Hogar",
          description: "Reparación de plomería",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        },
        {
          id: "transaction_032",
          date: "2020-04-24",
          total: 780000,
          type: "income",
          category: "Ingreso",
          description: "Pago parcial freelance",
          createdAt: "2020-04-01T10:00:00",
          updatedAt: "2020-04-01T10:00:00"
        }
      ]
    },
    "2020-05": {
      incomes: [
        {
          id: "income_009",
          name: "Salario Empresa",
          incomeDate: "2020-05-15",
          expectedAmount: 3600000,
          realAmount: 3650000,
          startDate: "2019-06-01",
          notes: "Bonificación incluida",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "income_010",
          name: "Freelance Diseño",
          incomeDate: "2020-05-26",
          expectedAmount: 900000,
          realAmount: 950000,
          startDate: "2020-01-05",
          notes: "Cliente pagó saldo + extra",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        }
      ],
      payments: [
        {
          id: "payment_017",
          name: "Arriendo",
          date: "2020-05-05",
          budgetAmount: 1250000,
          realAmount: 1250000,
          category: "Hogar",
          isPaid: true,
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "payment_018",
          name: "Internet y TV",
          date: "2020-05-10",
          budgetAmount: 135000,
          realAmount: 140000,
          category: "Servicios",
          isPaid: true,
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "payment_019",
          name: "Energía",
          date: "2020-05-18",
          budgetAmount: 115000,
          realAmount: 108000,
          category: "Servicios",
          isPaid: true,
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "payment_020",
          name: "Gimnasio",
          date: "2020-05-20",
          budgetAmount: 85000,
          realAmount: 85000,
          category: "Salud",
          isPaid: true,
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        }
      ],
      expenses: [
        {
          id: "expense_021",
          name: "Mercado",
          budgetAmount: 720000,
          realAmount: 700000,
          category: "Alimentación",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "expense_022",
          name: "Combustible",
          budgetAmount: 180000,
          realAmount: 195000,
          category: "Transporte",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "expense_023",
          name: "Restaurantes",
          budgetAmount: 240000,
          realAmount: 215000,
          category: "Entretenimiento",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "expense_024",
          name: "Consulta médica",
          budgetAmount: 120000,
          realAmount: 130000,
          category: "Salud",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "expense_025",
          name: "Ropa de temporada",
          budgetAmount: 150000,
          realAmount: 175000,
          category: "Ropa",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        }
      ],
      savings: [
        {
          id: "saving_009",
          name: "Fondo de emergencia",
          budgetAmount: 600000,
          realAmount: 600000,
          targetDate: "2020-12-31",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "saving_010",
          name: "Viaje fin de año",
          budgetAmount: 350000,
          realAmount: 360000,
          targetDate: "2020-11-30",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        }
      ],
      debts: [
        {
          id: "debt_009",
          name: "Tarjeta de crédito",
          monthlyBudget: 400000,
          realPayment: 420000,
          pendingBalance: 1130000,
          notes: "Cuota mensual mínima + extra",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "debt_010",
          name: "Préstamo estudiantil",
          monthlyBudget: 250000,
          realPayment: 250000,
          pendingBalance: 4500000,
          notes: "Pago automático",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        }
      ],
      transactions: [
        {
          id: "transaction_033",
          date: "2020-05-15",
          total: 3650000,
          type: "income",
          category: "Ingreso",
          description: "Salario quincena mayo",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "transaction_034",
          date: "2020-05-05",
          total: 1250000,
          type: "expense",
          category: "Hogar",
          description: "Pago arriendo mayo",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "transaction_035",
          date: "2020-05-08",
          total: 270000,
          type: "expense",
          category: "Alimentación",
          description: "Mercado quincenal",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "transaction_036",
          date: "2020-05-12",
          total: 95000,
          type: "expense",
          category: "Transporte",
          description: "Tanqueada de combustible",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "transaction_037",
          date: "2020-05-17",
          total: 600000,
          type: "saving",
          category: "Ahorro",
          description: "Aporte fondo de emergencia",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "transaction_038",
          date: "2020-05-20",
          total: 420000,
          type: "debt",
          category: "Deuda",
          description: "Pago tarjeta de crédito",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "transaction_039",
          date: "2020-05-23",
          total: 175000,
          type: "expense",
          category: "Ropa",
          description: "Compra ropa de temporada",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        },
        {
          id: "transaction_040",
          date: "2020-05-26",
          total: 950000,
          type: "income",
          category: "Ingreso",
          description: "Pago freelance diseño",
          createdAt: "2020-05-01T10:00:00",
          updatedAt: "2020-05-01T10:00:00"
        }
      ]
    }
  }
};

export default demoData;
