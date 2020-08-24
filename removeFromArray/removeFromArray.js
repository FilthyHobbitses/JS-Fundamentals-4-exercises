const removeFromArray = function (array, ...removeItem) {
  Array.from(removeItem);
  console.log(removeItem);

  for (i = 0; i < removeItem.length; i++) {
    // log value of each item to remove
    let item = removeItem.filter(i);
    console.log(item);

    // find item in array
  }

  //   let item = array.indexOf(removeItem);
  //   console.log(item);
  //   newArray = array.splice(item);
  //   return array;
};
removeFromArray(["hi", "test", "steve", "poop"], "hi", "test");
module.exports = removeFromArray;
