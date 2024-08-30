const removeFromArray = function (arr, ...args) {
  // a function that removes the argument provided from a given array.
  //   return (answerArray = arr.filter((val) => !args.includes(val)));
  let answerArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!args.includes(arr[i])) {
      answerArray.push(arr[i]);
    }
  }
  return answerArray;
};
// Do not edit below this line
module.exports = removeFromArray;
