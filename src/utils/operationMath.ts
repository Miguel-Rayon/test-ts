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

export function operation(a: number, b: number, operation: any) {
  const OPERATIONS: ISalinasMatoAColosio<string> = {
    sum: sum(a, b),
    substract: rest(a, b),
    divide: divid(a, b),
    multiply: mult(a, b),
  };

  return OPERATIONS[operation];
}

export function getRandomInt(max: number | any): any {
  return Math.floor(Math.random() * max);
}

export function getRandomFloat(max: number | any): any {
  return parseFloat((Math.random() * max).toFixed(2));
}

const getCharacters = (length: number) => {
  let result = "";
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz´+{}_.<>¨*][]_-!#$%&/()="';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

export function getRandomCharacter(max: number) {
  return getCharacters(max);
}
