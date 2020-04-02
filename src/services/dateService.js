import moment from "moment";

export const getCurrentMonthKey = () => moment().format("YYYY-MM");

export const getMonthKey = (date) => moment(date).format("YYYY-MM");

export const getDaysInMonth = (monthKey) =>
  moment(monthKey, "YYYY-MM").daysInMonth();

export const getMonthDates = (monthKey) => {
  const days = getDaysInMonth(monthKey);
  const dates = [];
  for (let i = 1; i <= days; i++) {
    dates.push(moment(monthKey, "YYYY-MM").date(i).format("YYYY-MM-DD"));
  }
  return dates;
};

export const now = () => moment().toISOString();
