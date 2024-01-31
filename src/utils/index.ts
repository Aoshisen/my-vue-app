export function increase(value: number, delta?: number) {
  return delta === undefined ? ++value : value + delta;
}
export function decrease(value: number, delta?: number) {
  return delta === undefined ? --value : value - delta;
}

export function double(value: number) {
  return value * 2;
}
