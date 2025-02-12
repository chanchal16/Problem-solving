/**Given an array of intervals, merge overlapping intervals and return the merged 
 * intervals.
 * Input: [[1, 3], [2, 6], [8, 10], [15, 18]]
Output: [[1, 6], [8, 10], [15, 18]] */

const mergeIntervals = (intervals) => {
  intervals.sort((a, b) => a[0] - b[0]); //sort intervals with start value
  //1ST APPROACH USING SORTING AND MERGING
  // let merged = [intervals[0]]  //Initialize with the first interval
  // for(const element of intervals){
  //     let lastMerged = merged[merged.length -1];
  //     let current = element;
  //     // Step 2: Check for overlap
  //     if(current[0] <= lastMerged[1]){
  //         // Merge intervals update the end value
  //         lastMerged[1] = Math.max(lastMerged[1],current[1])
  //     }else{
  //         merged.push(current)  //No overlap, add current interval to result
  //     }
  // }
  // return merged;

  // 2ND APPROACH USING STACK
  let stack = [];
  stack.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    let top = stack[stack.length - 1];
    let current = intervals[i];
    // Step 2: Merge if overlapping
    if (current[0] <= top[1]) {
      //If it overlaps with the top interval in the stack, merge it
      top[1] = Math.max(top[1], current[1]); //update end value of top
    } else {
      stack.push(current); //No overlap, push current interval onto stack
    }
  }
  return stack;
};
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));