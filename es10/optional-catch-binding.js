let a = '1';

try {
  
  a = 2;
  throw Error();  
  
} catch {
  a = -1;
}
  
console.log(a);
