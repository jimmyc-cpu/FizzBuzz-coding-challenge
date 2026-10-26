/**
For a given natural number greater zero return
● “Fizz” if the number is divisible by 3
● “Buzz” if the number is divisible by 5
● The number if it is not divisible by both 3 and 5
  Input Result
  1       1
  2       2
  3       Fizz
  4       4
  5       Buzz
  6       Fizz
  9       Fizz
  10      Buzz
  15      FizzBuzz
  20      Buzz
  30      FizzBuzz
  45      FizzBuzz
  49      49
  50      Buzz
  60      FizzBuzz
  75      FizzBuzz
  90      FizzBuzz
  99      Fizz

Bonus
Add the following new rule, if a number is prime return Whizz. Only worry about numbers up to 100.
  Input Result
  1      1
  2      Whizz
  3      FizzWhizz
  4      4
  5      BuzzWhizz
  7      Whizz
  11     Whizz
  13     Whizz
  17     Whizz
  19     Whizz
  23     Whizz
  29     Whizz
  31     Whizz
  59     Whizz
  67     Whizz
  89     Whizz
  97     Whizz
 */
  const isPrime = (input: number): boolean => {
  if (input < 2) return false;
  for (let i = 2; i < input; i++) {
    if (input % i === 0) return false;
  }
  return true;
};
export const game = (input: number) => {
  let result ="";
  if (input % 3 === 0) {
    result += "Fizz";
  }
  if (input % 5 === 0) {
    result += "Buzz";
  }
  if (isPrime(input)) {
    result += "Whizz";
  }
  return result || input;
};
