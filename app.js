console.log("hello world");

for (let i = 0; i < 100; i++) {
  let num = i + 1;
  // console.log(num); //number

  const resto2 = num % 2;
  const resto3 = num % 3;
  const resto5 = num % 5;
  // console.log(num, resto);

  if (resto3 === 0) {
    console.log("Fizz");
  } else if (resto5) {
    console.log("buz");
  } else if (resto3 === 0 && resto5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(num);
  }
}
