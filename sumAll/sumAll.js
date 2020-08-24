const sumAll = function (num1, num2) {
  if ((typeof num1 && typeof num2) !== "number") {
    return "ERROR";
  } else if (num1 >= 0 && num2 >= 0) {
    let n = Math.min(num1, num2); //use the smaller number as the starting num
    console.log(n);
    let o = Math.max(num1, num2); //use the larger number as the stopping num
    console.log(o);
    let allNums = []; // create an array to store each number

    // create an array of numbers
    for (i = n; i <= o; i++) {
      allNums.push(i);
    }
    //add together array
    function myFunction(accumulator, currentValue) {
      return accumulator + currentValue;
    }
    let sum = allNums.reduce(myFunction, 0);
    return sum;
  } else {
    console.log("ERROR");
    return "ERROR";
  }
};

sumAll(-45, 6);
module.exports = sumAll;
