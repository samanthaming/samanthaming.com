export function isObjectEmpty(object = {}) {
  return Object.keys(object).length === 0;
}

export function isArrayEmpty(array = []) {
  return array.length === 0;
}
