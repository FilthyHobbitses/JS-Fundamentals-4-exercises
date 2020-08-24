let reverseString = function (word) {
  let arrayedWord = Array.from(word);
  let reversedWord = [];

  for (n = word.length - 1; n >= 0; n--) {
    reversedWord.push(arrayedWord[n]);
  }
  console.log(reversedWord);
  return reversedWord.join("");
};
reverseString("hello");

module.exports = reverseString;
