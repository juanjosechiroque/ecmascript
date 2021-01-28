/*
function myFunction (name, age, country) {
  const myName = name || 'juan jose';
  const myAge = age || '99';
  const myCountry = country || 'pe'
  console.log(name, edad);
}
*/

// Default parameters
function myFunction(name = 'juan jose', age = 99, country = 'pe') {
  console.log(name, age, country);
}

myFunction();
myFunction('oscar');
