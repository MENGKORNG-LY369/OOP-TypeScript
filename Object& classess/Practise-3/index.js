var Calculator = /** @class */ (function () {
    function Calculator(numbers, operator) {
        this.numbers = numbers;
        this.operator = operator;
        this.numbers = numbers;
        this.operator = operator;
    }
    Calculator.prototype.calculate = function () {
        switch (this.operator) {
            case "*":
                this.result = this.numbers.number1 * this.numbers.number2;
                break;
            case "/":
                this.result = this.numbers.number1 / this.numbers.number2;
                break;
            case "+":
                this.result = this.numbers.number1 + this.numbers.number2;
                break;
            case "-":
                this.result = this.numbers.number1 - this.numbers.number2;
                break;
            case "^":
                this.result = Math.pow(this.numbers.number1, this.numbers.number2);
                break;
            default:
                this.result = "Your operator must be in \"+\", \"-\", \"*\", \"^\", or \"/\"!";
        }
        return this.result;
    };
    return Calculator;
}());
var multiplyResult = new Calculator({ number1: 9, number2: 3 }, "*");
var minusResult = new Calculator({ number1: 9, number2: 3 }, "-");
var plusResult = new Calculator({ number1: 9, number2: 3 }, "+");
var divideResult = new Calculator({ number1: 9, number2: 3 }, "/");
var powerResult = new Calculator({ number1: 9, number2: 3 }, "^");
console.log(powerResult.calculate());
