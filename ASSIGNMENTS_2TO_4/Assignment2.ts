// ASSIGNMENT FOR HIGHER ORDER FUNCTIONS:
//MAP
//FILTER
//REDUCE

class highOrderFunctions {
  arrayOfNumbers: number[];
  constructor(arr: number[]) {
    this.arrayOfNumbers = arr.map(function (num) {
      return num;
    });
  }

  display(): void {
    console.log("the array we got is " + this.arrayOfNumbers);
  }
  dsiplaySquares(): void {
    let arrayOfSquares = this.arrayOfNumbers.map(function (num) {
      return num * num;
    });
    console.log(arrayOfSquares);
  }
  displayEvenNumbers(): void {
    let arrayOfEvenNumbers = this.arrayOfNumbers.filter(function (num) {
      if (num % 2 === 0) {
        return true;
      } else return false;
    });
  }

  displaySum(): void {
    let sum = this.arrayOfNumbers.reduce(function (a, b) {
      return a + b;
    });
  }
}

function oddOrEven(): boolean {
  let x = 32;
  if (x % 2 === 0) return true;
  else return false;
}

console.log(oddOrEven());
