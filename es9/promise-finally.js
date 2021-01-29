const helloWorld = () => {
  return new Promise( (resolve, reject) => {
    if (true) {
      setTimeout(() => resolve('hello'), 3000);
    } else {
      reject(new Error('test error'));
    }
  });
}

helloWorld()
 .then(response => console.log(response))
 .catch(err => console.log(err))
 .finally(response => console.log('finalizó'));
