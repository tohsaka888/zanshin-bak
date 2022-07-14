export const calcSize = (value: number | string) => {
  if (typeof value === 'number') {
    return value
  } else {
    return +value.replace('%', '')
  }
}