/**Given an array of integers numbers, determine the subarray that has the 
 * highest sum and return that sum. 
 * Input: numbers = [-1,5,-3,9,-11]
Output: 11
Explanation: The subarray [5, -3, 9] has the largest sum i.e 11.*/

const maxSumSubArray = (nums) => {
  // using nested loops
  // let result = nums[0];
  // for(let i=0; i<nums.length; i++){
  //     let sum = 0;
  //     for(let j=i; j<nums.length; j++){
  //         sum += nums[j];
  //         if(sum > result){
  //             result = sum;
  //         }
  //     }
  // }
  // return result;

  /**Kadane's algo - traverse over the array from left to right and for each
   * ele, find the max sum among all subarrays ending at that ele. The result
   * will be the max of all these values.
   * for the max subarray sum ending at the previous index is positive, then it
   *  is always better to extend the subarray, if negative then start new subarr  */
  let result = nums[0];
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    maxSum = Math.max(maxSum + nums[i], nums[i]);
    result = Math.max(result, maxSum);
  }
  console.log("subarr:", result, maxSum);
  return result;
};
console.log("max sum:", maxSumSubArray([-1, 5, -3, 9, -11]));
