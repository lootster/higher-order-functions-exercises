function multiplyBy10(array) {
  const result = array.map(element => element * 10);
  return result;
}


function onlyVowels(array) {
  return array.map(word => word.match(/[aeiou]/g).join(''));
}


function multiplyBy2(array) {
  return array.map(element => element * 2);
}

function doubleMatrix(matrix) {
  return matrix.map(multiplyBy2);
  //return matrix.map(array => multiplyBy2(array));
}

function onlyNames(array) {
  return array.map(element => element.name);
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  multiplyBy2: multiplyBy2,
  doubleMatrix: doubleMatrix,
  onlyNames: onlyNames
};


