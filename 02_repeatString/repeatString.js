const repeatString = function (word, rep) {
  let answer = [];
  if (rep >= 0) {
    for (let i = 0; i < rep; i++) {
      answer.push(word);
    }
    answer = answer.join("");
    return answer;
  } else {
    answer = "ERROR";
    return answer;
  }
};
// Do not edit below this line
module.exports = repeatString;
