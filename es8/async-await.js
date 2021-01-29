const helloWorld = () => {
  return new Promise( (resolve, reject) => {
    if (true) {
      resolve('hello');
    } else {
      reject(new Error('test error'));
    }
  });
}

const helloAsync = async () => {  
  try {
    const hello = await helloWorld();
    console.log(hello);  
  } catch (err) {
    console.log(err);
  }
}

helloAsync();
