
class Calculator {

    public result: number | string;
    constructor(
        public numbers: { number1: number, number2: number },
        public operator: string
    ) {
        this.numbers = numbers;
        this.operator = operator;
    }

    calculate(): number | string {
        switch (this.operator) {
            case "*":
                this.result = this.numbers.number1 * this.numbers.number2
                break;
            case "/":
                this.result = this.numbers.number1 / this.numbers.number2
                break;
            case "+":
                this.result = this.numbers.number1 + this.numbers.number2
                break;
            case "-":
                this.result = this.numbers.number1 - this.numbers.number2
                break;
            case "^":
                this.result = Math.pow(this.numbers.number1, this.numbers.number2)
                break;
            default:
                this.result = `Your operator must be in "+", "-", "*", "^", or "/"!`;
        }
        return this.result;
    }
}

const multiplyResult = new Calculator({ number1: 9, number2: 3 }, "*");
const minusResult = new Calculator({ number1: 9, number2: 3 }, "-");
const plusResult = new Calculator({ number1: 9, number2: 3 }, "+");
const divideResult = new Calculator({ number1: 9, number2: 3 }, "/");
const powerResult = new Calculator({ number1: 9, number2: 3 }, "^");
console.log(powerResult.calculate());