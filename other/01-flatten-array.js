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

// using stack
const flattenArray = (nestedArr) => {
  let stack = [...nestedArr];
  let result = [];
  while (stack.length) {
    const nextValue = stack.pop();
    if (Array.isArray(nextValue)) {
      stack.push(...nextValue);
    } else {
      result.push(nextValue);
    }
  }
  /*Because we use push and pop to add elements in our result array, the array 
    will be backwards, so we use the reverse method to flip our array back in the correct order.*/
  return result.reverse();
};
console.log(flattenArray([1, [2, [3, [4, 5]]]]));