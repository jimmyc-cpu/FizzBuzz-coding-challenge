import { game } from "./fizzBuzzWhizz";

describe('FizzBuzz Game', () => {
  test('if the number is 1', () => {
    const result = game(1);
    expect(result).toEqual(1);
  });
     test('if the number is 2', () => {
    const result = game(2);
    expect(result).toEqual("Whizz");
  });
   test('if the number is 3', () => {
    const result = game(3);
    expect(result).toEqual("FizzWhizz");
  });
   test('if the number is 4', () => {
    const result = game(4);
    expect(result).toEqual(4);
  });
   test('if the number is 5', () => {
    const result = game(5);
    expect(result).toEqual("BuzzWhizz");
  });
   test('if the number is 6', () => {
    const result = game(6);
    expect(result).toEqual("Fizz");
  });
  test('if the number is 9', () => {
    const result = game(9);
    expect(result).toEqual("Fizz");
  });  
   test('if the number is 10', () => {
    const result = game(10);
    expect(result).toEqual("Buzz");
  });  
  test('if the number is 15', () => {
    const result = game(15);
    expect(result).toEqual("FizzBuzz");
  }); 
  test('if the number is 20', () => {
    const result = game(20);
    expect(result).toEqual("Buzz");
  }); 
  test('if the number is 30', () => {
    const result = game(30);
    expect(result).toEqual("FizzBuzz");
  }); 
    test('if the number is 75', () => {
    const result = game(75);
    expect(result).toEqual("FizzBuzz");
  }); 
});

