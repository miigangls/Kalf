let counter = 0;

export const generateId = (prefix = "id") =>
  `${prefix}_${Date.now()}_${++counter}`;
