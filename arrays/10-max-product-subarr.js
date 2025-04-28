/**Given an array of integers numbers, determine the subarray that has the 
 * highest product and return that product.
 * Input: numbers = [1,2,-3,5,1]
Output: 5
Explanation: The subarray [5, 1] has the largest product i.e 5. */

const getMaxProductSubarray = (nums) => {
  /* using nested loops - find the product of each of these subarrays and 
     return the maximum product among all the subarrays.*/
  // let result = nums[0];
  // for(let i=0; i<nums.length; i++){
  //     let multiplied = 1;
  //     for(let j=i; j<nums.length; j++){
  //         multiplied = multiplied * nums[j];
  //         if(multiplied > result){
  //             result = multiplied;
  //         }
  //     }
  // }
  // return result;

  // using Traversal From Starting and End of an Array
  let maxProduct = 0;
  let left = 1;
  let right = 1;
  for (let i = 0; i < nums.length; i++) {
    if (left === 0) {
      left = 1;
    }
    if (right === 0) {
      right = 1;
    }
    left = left * nums[i];
    let j = nums.length - i - 1;
    right = right * nums[j];

    maxProduct = Math.max(left, right, maxProduct);
  }
  return maxProduct;
};
console.log(
  "max product from arr:",
  getMaxProductSubarray([-1, -3, -10, 0, 60])
);
