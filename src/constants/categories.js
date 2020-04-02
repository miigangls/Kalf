const categories = [
  "Hogar",
  "Alimentación",
  "Transporte",
  "Salud",
  "Educación",
  "Entretenimiento",
  "Servicios",
  "Ropa",
  "Ahorro",
  "Deuda",
  "Ingreso",
  "Otros"
];

export const EXPENSE_CATEGORIES = categories.filter(c => c !== "Ingreso");

export const TRANSACTION_TYPES = ["income", "expense", "saving", "debt"];

export default categories;
