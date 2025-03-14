/**Implement a function flatten that returns a newly-created array with all
 * sub-array elements concatenated recursively into a single level.
 * flatten([1, [2, 3]]); // [1, 2, 3] */

const flatten = (nestedArr) => {
  let flattenedArray = [];
  const handleFlat = (array) => {
    let counter = 0;
    while (counter < array.length) {
      let val = array[counter];
      if (Array.isArray(val)) {
        handleFlat(val);
      } else {
        flattenedArray.push(val);
      }
      counter++;
    }
  };
  handleFlat(nestedArr);
  return flattenedArray;
};
console.log(flatten([1, [2, [3]]]));
