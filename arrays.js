//6. Use `reduce` to calculate the product of all elements in
// `[1, 2, 3, 4, 5]`

const product = (array) => array.reduce((init, element) => init * element, 1);

// 7. Write a function to remove all falsy values from an array:
// `[0, 1, false, 2, '', 3, null, 4, undefined]`.

const filterTruthy = (array) => array.filter((element) => element);

// 8. Use `filter` to extract all prime numbers from
// `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`.
