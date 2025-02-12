/**Given an array, return an array where each element at index i is the product of 
 * all elements in the array except the one at i
 * Input: arr[] = [10, 3, 5, 6, 2]
Output: [180, 600, 360, 300, 900]
Explanation: 
For i=0, res[i] = 3 * 5 * 6 * 2 is 180.
For i = 1, res[i] = 10 * 5 * 6 * 2 is 600.
For i = 2, res[i] = 10 * 3 * 6 * 2 is 360.
For i = 3, res[i] = 10 * 3 * 5 * 2 is 300.
For i = 4, res[i] = 10 * 3 * 5 * 6 is 900. */

const getProductOfArray = (arr) => {
  // 1st APPROACH USING NESTED LOOPS
  let n = arr.length;
  let res = new Array(n).fill(1); //fill res arr with 1 of length n --> res=[1,1,1,...]
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        //check index
        res[i] = res[i] * arr[j]; //1*3 = 3 res[i]=3,arr[j]=5  --> 3*5=15=res[i]
      }
    }
  }
  return res;
};
console.log(getProductOfArray([10, 3, 5, 6, 2]));