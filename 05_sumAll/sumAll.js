const sumAll = function (num1, num2) {
  let sum = 0;
  if (
    num1 <= 0 ||
    num2 <= 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number" ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num2) // if not true i.e false
  ) {
    return "ERROR";
  }
  const large = Math.max(num1, num2);
  const small = Math.min(num1, num2);

  for (let i = small; i <= large; i++) {
    sum += i;
  }
  return sum;
};
// Do not edit below this line
module.exports = sumAll;
