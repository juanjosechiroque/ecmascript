class Calculator {
  constructor(){
    this.valueA = 0;
    this.ValueB = 0;
  }
  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }  
}

const calculator = new Calculator();

console.log(calculator.sum(2,3));
