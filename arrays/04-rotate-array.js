/**Given an integer array nums, rotate the array to the right by k steps, where k
 *  is non-negative.
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4] */

const rotateArray = (arr, k) => {
  let n = arr.length;
  k = k % n; // Handle cases where k is greater than the array length
  // 1st approach using temp arr
  let temp = arr.slice(n - k); //copy and store last k elements
  console.log("temp", temp);
  // using inbuilt functions
  // nums.splice(n - k); // Remove the last k elements from the original array
  // nums.unshift(...temp); // Add the elements from the temporary array to the beginning

  // shift other elements to the right
  for (let i = n - k - 1; i >= 0; i--) {
    arr[i + k] = arr[i];
  }
  // copy temp elements to original arr
  for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
  }
  console.log("arr", arr);
  return arr;
};
rotateArray([1, 2, 3, 4, 5, 6, 7], 3);