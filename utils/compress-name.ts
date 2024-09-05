export function compressFilename(filename: string) {
  const lastDotIndex = filename.lastIndexOf(".");
  const name = filename.slice(0, lastDotIndex);
  const extension = filename.slice(lastDotIndex);

  if (filename.length <= 20) {
    return filename;
  }

  const charsToKeep = 20 - extension.length - 3;

  const compressedName = name.slice(0, charsToKeep) + "...";

  return compressedName + extension;
}
