const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const makingArray = (acc, curr) => acc.concat(curr);


function flatten(array) {
  return array.reduce(makingArray, []);
}

console.log(flatten(arrays));