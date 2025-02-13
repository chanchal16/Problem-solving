/**Find the element that appears more than n/2 times in an array of size n.
 * Input : arr[] = {1, 1, 2, 1, 3, 5, 1}
Output : 1
Explanation: Note that 1 appear 4 times which is more than  7 / 2 times 
 */

const findMajorityElement = (arr) => {
  let n = arr.length;
  let x = n / 2;

  //   1ST APPROACH - USING NESTED LOOPS
  //   for (let i = 0; i <= n; i++) {
  //     let count = 0;
  //     // Inner loop to count the frequency of arr[i]
  //     for (let j = 0; j < n; j++) {
  //       if (arr[i] === arr[j]) {
  //         count++;
  //       }
  //     }
  //     // Check if count of arr[i] is more than half the size of the array
  //     if (count > x) {
  //       console.log("count", count, "x:", x);
  //       return arr[i];
  //     }
  //   }

  //2ND APPROACH - USING SORTING
  //   if (n === 1) return arr[0];
  //   let count = 1;
  //   arr.sort((a, b) => a - b);
  //   for (let i = 1; i < n; i++) {
  //     if (arr[i] === arr[i - 1]) {
  //       count++;
  //     } else {
  //       if (count > Math.floor(x)) {
  //         return arr[i];
  //       }
  //       count = 1;
  //     }
  //   }
  //   // Check the last element
  //   if (count > Math.floor(x)) {
  //     return arr[n - 1];
  //   }

  //3RD APPROACH - Moore’s Voting Algorithm (OPTIMAL SOLUTION)
  let count = 0;
  let element;
  for (let num of arr) {
    if (count === 0) {
      element = num;
      count = 1;
    } else if (num === element) {
      count++;
    } else {
      count--;
    }
  }
  let count1 = 0;
  // Traverse the array again to count the occurrences of the element
  for (let ele of arr) {
    if (ele === element) {
      count1++;
    }
  }
  //If count is greater than n / 2, return the element
  if (count1 > Math.floor(x)) {
    return element;
  }
  // If no majority element found, return -1
  return -1;
};
console.log("elem:", findMajorityElement([1, 5, 5, 5, 3, 1, 5]));