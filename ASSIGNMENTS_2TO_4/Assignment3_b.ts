//OPTIONAL  PARAMETER

function anupma(a: number, b: number, c?: number): number {
    if (c === undefined) return a + b;
    else return a + b + c;
  }
  console.log(anupma(2,3,4));
  console.log(anupma(12,13));