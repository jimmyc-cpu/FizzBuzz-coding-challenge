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
   test('if the number is 7', () => {
    const result = game(7);
    expect(result).toEqual("Whizz");
  });
  test('if the number is 9', () => {
    const result = game(9);
    expect(result).toEqual("Fizz");
  });  
   test('if the number is 10', () => {
    const result = game(10);
    expect(result).toEqual("Buzz");
  });  
   test('if the number is 11', () => {
    const result = game(11);
    expect(result).toEqual("Whizz");
  }); 
  test('if the number is 13', () => {
    const result = game(13);
    expect(result).toEqual("Whizz");
  }); 
  test('if the number is 15', () => {
    const result = game(15);
    expect(result).toEqual("FizzBuzz");
  }); 
  test('if the number is 17', () => {
    const result = game(17);
    expect(result).toEqual("Whizz");
  }); 
  test('if the number is 19', () => {
    const result = game(19);
    expect(result).toEqual("Whizz");
  }); 
  test('if the number is 20', () => {
    const result = game(20);
    expect(result).toEqual("Buzz");
  }); 
  test('if the number is 23', () => {
    const result = game(23);
    expect(result).toEqual("Whizz");
  }); 
  test('if the number is 29', () => {
    const result = game(29);
    expect(result).toEqual("Whizz");
  }); 
  test('if the number is 30', () => {
    const result = game(30);
    expect(result).toEqual("FizzBuzz");
  }); 
   test('if the number is 31', () => {
    const result = game(31);
    expect(result).toEqual("Whizz");
  }); 
   test('if the number is 45', () => {
    const result = game(45);
    expect(result).toEqual("FizzBuzz");
  }); 
    test('if the number is 49', () => {
    const result = game(49);
    expect(result).toEqual(49);
      }); 
    test('if the number is 50', () => {
    const result = game(50);
    expect(result).toEqual("Buzz");
  }); 
    test('if the number is 59', () => {
    const result = game(59);
    expect(result).toEqual("Whizz");
  }); 
    test('if the number is 60', () => {
    const result = game(60);
    expect(result).toEqual("FizzBuzz");
  }); 
    test('if the number is 67', () => {
    const result = game(67);
    expect(result).toEqual("Whizz");
  }); 
    test('if the number is 75', () => {
    const result = game(75);
    expect(result).toEqual("FizzBuzz");
  }); 
     test('if the number is 89', () => {
    const result = game(89);
    expect(result).toEqual("Whizz");
  }); 
      test('if the number is 90', () => {
    const result = game(90);
    expect(result).toEqual("FizzBuzz");
  }); 
    test('if the number is 97', () => {
    const result = game(97);
    expect(result).toEqual("Whizz");
  }); 
   test('if the number is 99', () => {
    const result = game(99);
    expect(result).toEqual("Fizz");
  }); 
});

