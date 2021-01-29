const helloPromise = () => {
  return new Promise( (resolve, reject) => {
    if (true) {
      resolve('hello');
    } else {
      reject('reject');
    }
  });
}

helloPromise()
 .then(response => console.log(response))
 .catch(err => console.log(err));
