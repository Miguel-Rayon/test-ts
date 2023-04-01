export function sum(a: number, b: number) {
  return a + b;
}

export function rest(a: number, b: number) {
  return a - b;
}

export function mult(a: number, b: number) {
  return a * b;
}

export function divid(a: number, b: number) {
  return a / b;
}

export function generarNumero(minimo: number, maximo: number): number {
  let numero = 0;
  while (numero === 0) {
    numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  }
  return numero;
}
