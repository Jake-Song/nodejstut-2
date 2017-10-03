var counter = function(arr){
  return 'There is ' + arr.length + ' elements of the array';
};

var adder = function(a, b){
  return `The Sum of 2 arguments is ${a+b}`;
}

var pi = 3.14;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
}
