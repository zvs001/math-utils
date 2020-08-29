

export default (value: number): number => {
  if (!value) return 0
  return Number(value.toFixed(2))
}
