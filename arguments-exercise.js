
// Sum functions
function mySum() {
  let answer = 0;
  let newArgs = Array.from(arguments);

  newArgs.forEach ((a) => {
    answer += a;
  });

  return answer;
}

function mySum2(...args) {
  let answer = 0;
  // let newArgs = Array.from(arguments);

  args.forEach ((a) => {
    answer += a;
  });

  return answer;
}
