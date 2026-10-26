# FizzBuzzWhizz 

A small coding exercise to practice **Test-Driven Development (TDD)**, built with **TypeScript** and **Jest**.

## The challenge

For a given natural number greater than zero, `game` returns:

- `"Fizz"` if the number is divisible by 3
- `"Buzz"` if the number is divisible by 5
- `"Whizz"` if the number is **prime**
- The words combined when more than one rule applies (for example, `3` returns `"FizzWhizz"` and `15` returns `"FizzBuzz"`)
- The number itself if no rule applies

| Input | Result |
|-------|--------|
| 1 | 1 |
| 2 | Whizz |
| 3 | FizzWhizz |
| 4 | 4 |
| 5 | BuzzWhizz |
| 15 | FizzBuzz |

## Prime numbers (Whizz)

A prime number is greater than 1 and is only divisible by 1 and itself. The `isPrime` function checks this by trying to divide the number by `2, 3, 4...`. If none of them divides it exactly, the number is prime.

| Input | Result |
|-------|--------|
| 2 | Whizz | 
| 7 | Whizz | 
| 97 | Whizz | 

Only **3** and **5** combine with Fizz and Buzz (`FizzWhizz`, `BuzzWhizz`), because they are the only primes divisible by 3 or 5.
