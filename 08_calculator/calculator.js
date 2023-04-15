const add = function(a, b) {
  return parseInt(a) + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  // let sum = 0;
	// for (let item of arr){
  //   sum += item;
  // }
  // return sum;
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum;
};

const multiply = function(arr) {
  const product = arr.reduce((total, number) => total * number, 1);
  return product;
};

const power = function(a, pow) {
  let result = 1;
	for (let i = 0; i < pow; i++){
    result *= a;
  }
  return result;
};

const factorial = function(a) {
	if(a === 0){
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= a; i++){
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
