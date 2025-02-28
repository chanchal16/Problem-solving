/**Find the longest common prefix string among an array of strings.
 * Input: strs = ["flower","flow","flight"]
Output: "fl"
 */

const longestCommonPrefix = (arr) => {
  arr.sort();
  let first = arr[0];
  let last = arr[arr.length - 1];
  let minLength = Math.min(first.length, last.length);
  let i = 0;
  while (i <= minLength && first[i] === last[i]) {
    i++;
  }
  return first.substring(0, i);
};

// using char by char matching
const findLongestCommonPrefix = (arr) => {
  let smallestStrLength = arr[0].length;
  for (let str of arr) {
    smallestStrLength = Math.min(smallestStrLength, str.length);
  }
  let result = [];
  for (let i = 0; i < smallestStrLength; i++) {
    let ch = arr[0][i];
    for (let str of arr) {
      if (str[i] !== ch) {
        return result.join("");
      }
    }
    result.push(ch);
  }
  return result.join("");
};
let arr = ["flower", "flow", "flight"];
console.log("longest prefix:", longestCommonPrefix(arr));
console.log("using 2nd approach:", findLongestCommonPrefix(arr));