export function mapToRange(value: number, min: number, max: number) {
  return value < max
    ? value > min
      ? ((value - min) * 100) / (max - min)
      : 0
    : 100;
}
