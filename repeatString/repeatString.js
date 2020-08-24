let repeatString = function (word, repetitionTimes) {
  if (word == "") {
    console.log("");
  } else if (repetitionTimes < 0) {
    console.log("ERROR");
    return "ERROR";
  } else if (repetitionTimes == 0) {
    return "";
  } else {
    console.log(word.repeat(repetitionTimes));
  }
  return word.repeat(repetitionTimes);
};

function number() {
  return Math.floor(Math.random() * 1000);
}

repeatString("hey", 3);
module.exports = repeatString;
