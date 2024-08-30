const reverseString = function (word) {
  let stringHolder = [];
  for (i = word.length - 1; i >= 0; i--) {
    stringHolder.push(word[i]);
  }
  let reversedString = stringHolder.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

// here is a one liner version of this code not that i like it but it works far better than mine
// return string.split("").reverse().join("");
