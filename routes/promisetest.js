function calculate(a, b) {
  function funkkari(resolve, reject) {
    setTimeout(() => {
      if (b !== 0) {
        resolve(a / b);
      } else {
        reject("cannot divide by zero");
      }
    }, 1000);
  }

  let p = new Promise(funkkari);
  return p;
}

/*
calculate(10,5)
    .then((result) => calculate(result, 2))
    .then((result) => console.log(result))

   */

async function myCalculation() {
  try {
    let result = await calculate(10, 5);
    let result2 = await calculate(result, 2);
    console.log(result);
  }
}
