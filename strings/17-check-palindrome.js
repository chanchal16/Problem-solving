/**Check if a given string is a palindrome
 * def - A string is said to be palindrome if it remains the same on reading from both ends.
 * input - nayan
 * output - nayan
 */

const checkPalindrome = (str) => {
  // const reversedStr = str.split('').reverse().join('');
  // return str === reversedStr;

  // using two pointers
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    console.log(str[start], str[end]);
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

//   USING RECURSION
const isPaindrome = (start, end, str) => {
  if (start >= end) {
    return true;
  }
  if (str[start] === str[end]) {
    return isPaindrome(start + 1, end - 1, str);
  }
  return false;
};

const checkIfPalindrome = (str) => {
  let start = 0;
  let end = str.length - 1;
  return isPaindrome(start, end, str);
};
console.log("is palindrome:", checkIfPalindrome("nayan"));
// console.log("check palindrome:", checkPalindrome("nayan"));