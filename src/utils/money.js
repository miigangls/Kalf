export function formatMoney(amount, currency = "COP") {
  const n = Number(amount) || 0;
  const rounded = Math.round(n);
  const sign = rounded < 0 ? "-" : "";
  const abs = Math.abs(rounded).toString();
  const withDots = abs.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const symbol = currency === "USD" ? "US$" : "$";
  return sign + symbol + " " + withDots;
}

export function parseMoney(str) {
  if (str === null || str === undefined) return 0;
  const cleaned = String(str).replace(/[^\d-]/g, "");
  const n = Number(cleaned);
  return isNaN(n) ? 0 : n;
}

export function sum(arr, key) {
  if (!Array.isArray(arr)) return 0;
  return arr.reduce((acc, x) => acc + (Number(x[key]) || 0), 0);
}
