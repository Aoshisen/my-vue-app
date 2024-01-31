export function increase(value: number, delta?: number) {
  return delta === undefined ? ++value : value + delta;
}
export function decrease(value: number, delta?: number) {
  return delta === undefined ? --value : value - delta;
}

export function double(value: number) {
  return value * 2;
}

export function generateDirectionValue(args: any[]): number[] {
  const values = args.slice(0, 4);
  const [top, right, bottom, left] = values.map((value) =>
    typeof value === "number" ? value : 0
  );

  if (values.length === 1) {
    return [top, top, top, top];
  } else if (values.length === 2) {
    return [top, right, top, right];
  } else if (values.length === 3) {
    return [top, right, bottom, right];
  } else {
    return [top, right, bottom, left];
  }
}
