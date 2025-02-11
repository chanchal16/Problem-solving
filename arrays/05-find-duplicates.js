/**Find all duplicate numbers in an array of integers.
 * Input: nums = [4,3,2,7,8,2,3,1]
Output: [2,3]
 */
const findDuplicates = (arr) => {
  let newarr = [];
  // using nested for loops
  // for(let i=0; i<arr.length; i++){
  //     for(let j=i+1; j<arr.length; j++){
  //         if(arr[i] === arr[j]){
  //             if(!newarr.includes(arr[i])){
  //                 newarr.push(arr[i])
  //             }
  //         }
  //     }
  // }
  // return newarr.sort((a,b)=>a-b);

  // using two pointers
  arr.sort((a, b) => a - b);
  let i = 0;
  while (i < arr.length - 1) {
    if (arr[i] === arr[i + 1]) {
      newarr.push(arr[i]);
      //  use nested while loop to skip consecutive duplicate elements.
      while (i < arr.length - 1 && arr[i] === arr[i + 1]) {
        i++;
      }
    }
    i++;
  }
  return newarr;
};
console.log("arr:", findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));