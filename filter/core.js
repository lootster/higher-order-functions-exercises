function onlyEven(array) {
  return array.filter(number => number % 2 === 0);
}

function onlySingleWord(array) {
  return array.filter(word => !(word.includes(" ")));
}

function positiveRowsOnly(matrix) {
  return matrix.filter(array => {
    for (let i = 0; i < array.length; i++){
      if (array[i] < 0) return false;
    } 
    return true;
  });
}

function truthyValuesOnly(array) {
  return array.filter(element => element);
}

module.exports = {
  onlyEven: onlyEven,
  onlySingleWord: onlySingleWord,
  positiveRowsOnly: positiveRowsOnly,
  truthyValuesOnly: truthyValuesOnly
};
