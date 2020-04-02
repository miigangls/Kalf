import * as FileSystem from "expo-file-system";

const FILE_PATH = `${FileSystem.documentDirectory}finance-data.json`;

export const fileExists = async () => {
  try {
    const info = await FileSystem.getInfoAsync(FILE_PATH);
    return info.exists;
  } catch (e) {
    return false;
  }
};

export const loadData = async () => {
  try {
    const info = await FileSystem.getInfoAsync(FILE_PATH);
    if (!info.exists) return null;
    const content = await FileSystem.readAsStringAsync(FILE_PATH);
    return JSON.parse(content);
  } catch (e) {
    return null;
  }
};

export const saveData = async (data) => {
  try {
    await FileSystem.writeAsStringAsync(
      FILE_PATH,
      JSON.stringify(data, null, 2)
    );
    return true;
  } catch (e) {
    return false;
  }
};

export const resetData = async (initialData) => {
  try {
    await FileSystem.writeAsStringAsync(
      FILE_PATH,
      JSON.stringify(initialData, null, 2)
    );
    return true;
  } catch (e) {
    return false;
  }
};
