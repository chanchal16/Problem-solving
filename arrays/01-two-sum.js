/* Given an array of integers and a target value, find two numbers that add up 
to the target.
ex: [2,4,5,7,9] target:9
output: 2,7*/

const twoSum = (arr, t) => {
  let val1 = 0;
  let val2 = 0;
  let sum = 0;
  // NESTED ARRAY APPROACH (BRUTE FORCE)
  for (let i = 0; i < arr.length; i++) {
    val1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      val2 = arr[j];
      if (val1 + val2 === t) {
        return [val1, val2];
      }
    }
  }

  /*TWO POINTER APPROACH
    1.Sort the array in ascending order.
    2.Initialize two pointers: one at the beginning (left) and one at the end (right).
    3.While the left pointer is less than the right pointer:
    -If the sum of the elements at the left and right pointers is less than the target,
     move the left pointer to the right.
    -If the sum is greater than the target, move the right pointer to the left.   
    -If the sum is equal to the target, return the indices of the two elements.*/
  arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum < t) {
      left++;
    } else if (sum > t) {
      right--;
    } else if (sum === t) {
      return [arr[left], arr[right]];
    }
  }
};
console.log("sum numbers", twoSum([2, 4, 5, 7, 9], 9));
