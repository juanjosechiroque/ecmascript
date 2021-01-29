const names = [
  { name: 'juan', age: 50 },
  { name: 'jose', age: 40 },
  { name: 'oscar', age: 40 }
]

let listOfNames = names.map(function (item) {
  console.log(item.name);
});

let listOfNamesES6 = names.map(item => console.log(item.name));

const printNames = item => console.log(item.name);
names.map(printNames);
