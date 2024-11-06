/*In an array containing n distinct numbers taken from 0 to n, find the missing 
number.
Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range[0,3]. 
2 is the missing number in the range since it does not appear in nums.*/

const findMissingNum = (arr) => {
  // let num;
  // for(let i=0; i<=arr.length; i++){
  //     console.log(i)
  //     if(!arr.includes(i)){
  //         console.log('i',i,arr[i])
  //         num = i
  //     }
  // }
  // return num

  // USING FORMULA n * (n + 1) / 2
  let total, n, num;
  n = arr.length;
  total = (n * (n + 1)) / 2;
  console.log("total", total);
  let arrsum = 0;
  arr.forEach((element) => {
    console.log("ele", element);
    arrsum += element;
    console.log("arrsums", arrsum);
    return arrsum;
  });
  num = total - arrsum;
  return num;
};
console.log("missing num is:", findMissingNum([2, 0, 1, 4]));