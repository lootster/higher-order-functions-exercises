// Method 1
// function onlyEven(array) {
//   return array.filter(number => number % 2 === 0);
// }
// Method 2
function onlyEven(array) {
  return array.filter(function (number) {
    return  number % 2 === 0;
  });
}

// Method 1
// function onlySingleWord(array) {
//   return array.filter(word => !(word.includes(" ")));
// }
// Method 2
function onlySingleWord(array) {
  return array.filter(function (word) {
    return !(word.includes(" "))
  });
}

// Method 1
// function positiveRowsOnly(matrix) {
//   return matrix.filter(array => {
//     for (let i = 0; i < array.length; i++){
//       if (array[i] < 0) return false;
//     } 
//     return true;
//   });
// }
// Method 2
// function positiveRowsOnly(matrix) {
//   return matrix.filter(array => array.every(num => num > 0));
// }
// Method 3
function positiveRowsOnly(matrix) {
  return matrix.filter(function (array) {
    return array.every(function (num) {
      return num > 0;
    });
  });
}

// Method 1
// function truthyValuesOnly(array) {
//   return array.filter(element => element);
// }

// Method 2
function truthyValuesOnly(array) {
  return array.filter(function (element) {
    return element;
  });
}

module.exports = {
  onlyEven: onlyEven,
  onlySingleWord: onlySingleWord,
  positiveRowsOnly: positiveRowsOnly,
  truthyValuesOnly: truthyValuesOnly
};
