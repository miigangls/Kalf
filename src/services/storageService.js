import * as FileSystem from 'expo-file-system';

const DIR = `${FileSystem.documentDirectory}finance-data/`;
const SETTINGS_FILE = `${DIR}settings.json`;
const monthFile = (key) => `${DIR}${key}.json`;

const ensureDir = async () => {
  const info = await FileSystem.getInfoAsync(DIR);
  if (!info.exists) {
    await FileSystem.makeDirectoryAsync(DIR, { intermediates: true });
  }
};

export const dirExists = async () => {
  try {
    const info = await FileSystem.getInfoAsync(DIR);
    return info.exists && info.isDirectory;
  } catch (e) {
    return false;
  }
};

export const listMonthKeys = async () => {
  try {
    const exists = await dirExists();
    if (!exists) return [];
    const files = await FileSystem.readDirectoryAsync(DIR);
    return files
      .filter((f) => /^\d{4}-\d{2}\.json$/.test(f))
      .map((f) => f.replace('.json', ''))
      .sort();
  } catch (e) {
    return [];
  }
};

export const loadSettings = async () => {
  try {
    const info = await FileSystem.getInfoAsync(SETTINGS_FILE);
    if (!info.exists) return null;
    const content = await FileSystem.readAsStringAsync(SETTINGS_FILE);
    return JSON.parse(content);
  } catch (e) {
    return null;
  }
};

export const saveSettings = async (settings) => {
  try {
    await ensureDir();
    await FileSystem.writeAsStringAsync(SETTINGS_FILE, JSON.stringify(settings, null, 2));
    return true;
  } catch (e) {
    return false;
  }
};

export const loadMonth = async (monthKey) => {
  try {
    const path = monthFile(monthKey);
    const info = await FileSystem.getInfoAsync(path);
    if (!info.exists) return null;
    const content = await FileSystem.readAsStringAsync(path);
    return JSON.parse(content);
  } catch (e) {
    return null;
  }
};

export const saveMonth = async (monthKey, monthData) => {
  try {
    await ensureDir();
    await FileSystem.writeAsStringAsync(
      monthFile(monthKey),
      JSON.stringify(monthData, null, 2)
    );
    return true;
  } catch (e) {
    return false;
  }
};

export const deleteMonth = async (monthKey) => {
  try {
    const path = monthFile(monthKey);
    const info = await FileSystem.getInfoAsync(path);
    if (info.exists) await FileSystem.deleteAsync(path, { idempotent: true });
    return true;
  } catch (e) {
    return false;
  }
};

export const loadAll = async () => {
  try {
    const settings = await loadSettings();
    if (!settings) return null;
    const keys = await listMonthKeys();
    const months = {};
    for (let i = 0; i < keys.length; i += 1) {
      const m = await loadMonth(keys[i]);
      if (m) months[keys[i]] = m;
    }
    return { settings, months };
  } catch (e) {
    return null;
  }
};

export const seedFromData = async (data) => {
  try {
    await ensureDir();
    if (data && data.settings) await saveSettings(data.settings);
    if (data && data.months) {
      const keys = Object.keys(data.months);
      for (let i = 0; i < keys.length; i += 1) {
        await saveMonth(keys[i], data.months[keys[i]]);
      }
    }
    return true;
  } catch (e) {
    return false;
  }
};

export const loadData = async () => loadAll();
export const saveData = async (data) => seedFromData(data);
