/**Implement a method to perform basic string compression using the counts of
 * repeated characters.
 * input - aabcccccaaa
 * output - a2b1c5a3 */

const compressString = (str) => {
  // using iterative approach
  // let result ='';
  // let count = 1;
  // for(let i=0; i<str.length; i++){
  //     if(str[i] === str[i+1]){
  //         count++;
  //     }else{
  //         result = result + str[i] + count;
  //         count = 1;
  //     }
  // }

  // return result;

  // using reducer
  return str.split("").reduce(
    (acc, curr, idx, arr) => {
      // If first character or same as previous one, increase count
      if (idx === 0 || curr === arr[idx - 1]) {
        acc.count++;
      } else {
        // Append previous character and its count
        acc.result += arr[idx - 1] + acc.count;
        acc.count = 1; // Reset count for the new character
      }
      // If it's the last character, append it too
      if (idx === arr.length - 1) {
        acc.result += curr + acc.count;
      }
      return acc;
    },
    { result: "", count: 0 }
  ).result;
};
console.log(compressString("aabccc"));