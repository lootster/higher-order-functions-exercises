// Check to see if all elements in an array
// are even numbers.
function allEven(array) {
  return array.every(number => number % 2 === 0);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.
// Method 1
// function isEveryElementPositive(matrix) {
//   return matrix.every(array => array.every(element => element > 0));
// }
// Method 2
function allPositiveNumber(num) {
  return num > 0;
};

function isEveryElementPositive(matrix) {
  return matrix.every(function (array) {
    return array.every(allPositiveNumber);
  });
}

module.exports = {
  allEven,
  isEveryElementPositive
};
