function sum(array) {
  return array.reduce((a,b) => a + b);
}


function productAll(matrix) {
    // pass in matrix and convert(reduce) them to array
  const convertArray = matrix.map(array => array.reduce((a,b) => a * b));
    // reduce the array by multiplying all the elements
  return convertArray.reduce((a,b) => a * b);
}


function luckyNumbers(array) {
  const output = array.reduce((sentence, word) => sentence + ', ' + word);
  return "Your lucky numbers are: " + output + "."; 
}

module.exports = {
  sum: sum,
  productAll: productAll,
  luckyNumbers: luckyNumbers
};
