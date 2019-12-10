import * as FileSystem from 'expo-file-system'

const allowedDirectory = [
  'configuration'
]

export async function buildDirs() {
  await allowedDirectory.forEach(async (dir) => {
    try {
      await FileSystem.makeDirectoryAsync(FileSystem.documentDirectory+dir)
    } catch (e) {/* NOOP */}
  })
}

export async function deleteDirs() {
  await allowedDirectory.forEach(async (dir) => {
    try { await deleteDirectory(dir) } catch (e) {/* NOOP */}
  })
  buildDirs()
}

export async function saveFile(directory, file, content) {
  if (!allowedDirectory.includes(directory)) throw `${directory} is not an allowed directory`;
  const directoryUri = FileSystem.documentDirectory + directory + '/'
  , fileUri = directoryUri + file;

  //create directory if it does not exists
  await FileSystem.getInfoAsync(directoryUri).then(async ({exists}) => {
    if (!exists) return await FileSystem.makeDirectoryAsync(directoryUri);
  }).catch(console.log)

  //save/override the file
  await FileSystem.writeAsStringAsync(fileUri, JSON.stringify(content));
}

export async function readFile(directory, file) {
  if (!allowedDirectory.includes(directory)) throw `${directory} is not an allowed directory`;
  const directoryUri = FileSystem.documentDirectory + directory + '/'
  , fileUri = directoryUri + file;

  let data;
  await FileSystem.getInfoAsync(fileUri).then(async ({exists}) => {
    if (exists) data = await FileSystem.readAsStringAsync(fileUri)
  }).catch(console.log)

  //fetch file
  if (data) return JSON.parse(data)
}

export async function getFilesFromDirectory(directory) {
  if (!allowedDirectory.includes(directory)) throw `${directory} is not an allowed directory`;
  const directoryUri = FileSystem.documentDirectory + directory + '/';
  return await FileSystem.readDirectoryAsync(directoryUri, {idempotent: true})
}

export async function getFileInfo(directory, file) {
  if (!allowedDirectory.includes(directory)) throw `${directory} is not an allowed directory`;
  const directoryUri = FileSystem.documentDirectory + directory + '/'
  , fileUri = directoryUri + file;
  return await FileSystem.getInfoAsync(fileUri)
}

export async function deleteDirectory(directory) {
  if (!allowedDirectory.includes(directory)) throw `${directory} is not an allowed directory`;
  const directoryUri = FileSystem.documentDirectory + directory + '/';
  return await FileSystem.deleteAsync(directoryUri, {idempotent: true})
}

export async function deleteFiles(directory, files) {
  if (!allowedDirectory.includes(directory)) throw `${directory} is not an allowed directory`;
  let deletePromises = []
  const directoryUri = FileSystem.documentDirectory + directory + '/';
  for (var i = 0; i < files.length; i++) {
    deletePromises.push(FileSystem.deleteAsync(directoryUri + files[i], {idempotent: true}))
  }
  return await Promise.all(deletePromises)
}
