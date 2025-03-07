/**Find the first non-repeating character in a string and return its index.
 * Input: s = "leetcode"
Output: 0
 */

const getUniqueCharIndex = (str) => {
  // using nested loops
  for (let i = 0; i < str.length; i++) {
    let charRepeated = false;
    for (let j = 0; j < str.length; j++) {
      if (i !== j && str[i] === str[j]) {
        charRepeated = true;
        break;
      }
    }
    if (charRepeated === false) {
      return i;
    }
  }

  // Approach 2: Using an Object
  let charCount = {}; //object to store the character counts.
  for (const element of str) {
    let char = element;
    charCount[char] = (charCount[char] || 0) + 1; //update the counts in the object
  }
  for (const ele of str) {
    if (charCount[ele] === 1) {
      return str.indexOf(ele); //return the index of the first character with a count of 1.
    }
  }

  // Approach 3: Using indexOf and lastIndexOf
  for (let i = 0; i < str.length; i++) {
    //check if its first occurrence is the same as its last occurrence
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return i;
    }
  }
  return -1;
};
console.log(getUniqueCharIndex("chanchal"));