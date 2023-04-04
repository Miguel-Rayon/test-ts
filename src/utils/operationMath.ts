export function sum(a: number | string, b: number | string): any | never {
  if (typeof a === "string" || typeof b === "string")
    return "Solo números baboso >:u";
  return a + b;
}

export function rest(a: number | string, b: number | string): any {
  if (typeof a === "string" || typeof b === "string")
    return "Solo números baboso >:u";
  return a - b;
}

export function mult(a: number | string, b: number | string): any {
  if (typeof a === "string" || typeof b === "string")
    return "Solo números baboso >:u";
  return a * b;
}

export function divid(a: number | string, b: number | string): any {
  if (typeof a === "string" || typeof b === "string")
    return "Solo números baboso >:u";
  if (b === 0) return "no se puede dividir entre 0 no sea imbecilillo";
  return a / b;
}

export function generarNumero(minimo: number, maximo: number): number {
  let numero = 0;
  while (numero === 0) {
    numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }
  return numero;
}

interface ISalinasMatoAColosio<Number> {
  [id: string]: number | string;
}

export function operations(a: number, b: number, operation: any) {
  const OPERATION: ISalinasMatoAColosio<string> = {
    sum: sum(a, b),
    rest: rest(a, b),
    divid: divid(a, b),
    mult: mult(a, b),
  };

  return OPERATION[operation];
}

export function getRandomInt(max: number | any): any {
  return Math.floor(Math.random() * max);
}

export function getRandomFloat(max: number | any): any {
  return parseFloat((Math.random() * max).toFixed(2));
}
