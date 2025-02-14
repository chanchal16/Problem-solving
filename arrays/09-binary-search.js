/**Implement binary search for a sorted array and find the index of a target value.
 * Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
 */
// const binarySearch = (arr, target) => {
//   let low = 0;
//   let high = arr.length - 1;
//   // 1ST APPROACH: ITERATIVE USING WHILE LOOP
//   while (low <= high) {
//     let mid = low + Math.floor((high - low) / 2);
//     // if target if present at mid return mid
//     if (arr[mid] === target) {
//       return ` target is present at index ${mid}`;
//     }
//     // if target is smaller than mid, then search in left sub-array
//     if (arr[mid] > target) {
//       high = mid - 1;
//     } else {
//       low = mid + 1; // if target is greater than mid, then search in right sub-array
//     }
//   }
//   // if target is not present in the array
//   return -1;
// };

// 2ND APPROACH - RECUSIVE
const binarySearchRecusion = (arr, target, low, high) => {
  if (high >= low) {
    let mid = low + Math.floor((high - low) / 2);
    // if target if present at mid return mid
    if (arr[mid] === target) {
      return `target is present at index ${mid}`;
    }
    // if target is smaller than mid, then search in left sub-array
    if (arr[mid] > target) {
      return binarySearchRecusion(arr, target, low, mid - 1);
    }
    // if target is greater than mid, then search in right sub-array
    return binarySearchRecusion(arr, target, mid + 1, high);
  }
  // if target is not present in the array
  return -1;
};

const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;
  return binarySearchRecusion(arr, target, low, high);
};

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 3));