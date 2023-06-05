"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
class calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    sum() {
        console.log(this.a + this.b);
    }
    diff() {
        if (this.a >= this.b)
            console.log(this.a - this.b);
        else
            console.log(this.b - this.a);
    }
    mult() {
        console.log(this.a * this.b);
    }
    div() {
        console.log(this.a / this.b);
    }
    rem() {
        console.log(this.a % this.b);
    }
}
exports.calculator = calculator;
