//6. Use `reduce` to calculate the product of all elements in
// `[1, 2, 3, 4, 5]`

const product = (array) => array.reduce((init, element) => init * element, 1);

// 7. Write a function to remove all falsy values from an array:
// `[0, 1, false, 2, '', 3, null, 4, undefined]`.

const filterTruthy = (array) => array.filter((element) => element);

// 8. Use `filter` to extract all prime numbers from
// `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.

const isPrime = function (number) {
  if (number <= 3) {
    return number > 1;
  }

  for (let factor = 2; factor <= Math.sqrt(number); factor++) {
    if (number % factor === 0) {
      return false;
    }
  }

  return true;
};

const filterPrimes = (array) => array.filter((element) => isPrime(element));

// 9. Sort an array of strings by their length.

const sortByLength = (array) => array.sort((a, b) => a.length - b.length);

// 10. Use `map` to create an array of the square roots of `[1, 4, 9, 16, 25]`.

const squareRoots = (array) => array.map((number) => Math.sqrt(number));
