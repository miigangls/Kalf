import moment from "moment";

export function formatDate(date, fmt = "DD/MM/YYYY") {
  return moment(date).format(fmt);
}

export function formatPercent(value) {
  const n = Number(value) || 0;
  return Math.round(n) + "%";
}

export function truncate(str, n = 30) {
  if (!str) return "";
  const s = String(str);
  if (s.length <= n) return s;
  return s.slice(0, n) + "...";
}
