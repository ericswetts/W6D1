function curriedSum(n) {
  let numbers = [];

  const _curriedSum = function _curriedSum (num) {
    numbers.push(num);

    // console.log(n);
    // console.log(numbers);

    let answer = 0;
    if (numbers.length === n) {
      numbers.forEach((el) => answer += el);
      return answer;
    } else {
      return _curriedSum;
    }
  };

  return _curriedSum;
}

Function.prototype.curry = function curry (numArgs) {
  let args = [];
  let callback = this;


  const _curried = function _curried(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return callback(...args);
    } else {
      return _curried;
    }
  };

  return _curried;
};
