const obj = {
  name: 'juan jose',
  age: 30,
  country: '´peru'
}

const { name, ...all } = obj;

console.log(all);


const obj2 = {
  ...obj,
  country: 'mexico'  
}

console.log(obj2);
