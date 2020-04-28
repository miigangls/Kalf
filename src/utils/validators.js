import moment from "moment";

export function isRequired(v) {
  if (v === null || v === undefined) return false;
  if (typeof v === "string") return v.trim().length > 0;
  return true;
}

export function isPositiveNumber(v) {
  const n = Number(v);
  return !isNaN(n) && n > 0;
}

export function isValidDate(v) {
  return moment(v).isValid();
}
