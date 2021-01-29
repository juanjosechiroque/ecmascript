
function* generatorFunction() {  
  if (true) {
    yield 'hello';
  }  
  if (true) {
    yield 'world';
  }  
}

const generator = generatorFunction();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
