/**Check if two strings are anagrams of each other.
 * Def: An anagram of a string is another string that contains the same characters,
 * only the order of characters can be different.
 * Input: CAT, ACT
Output: true*/

const checkAnagram = (s, t) => {
  // using sorting
  //    s = s.split('').sort().join('');
  //    t = t.split('').sort().join('');
  //     console.log(s,t)
  //     return s === t;

  // using Hashmap
  // Create a hashmap to store character frequencies
  let charCount = {};
  // Count frequency of each character in string s1
  for (let ch of s) {
    charCount[ch] = (charCount[ch] || 0) + 1;
  }
  for (let ch of t) {
    // charCount[ch] = (charCount[ch] || 0) - 1;
    console.log(charCount[ch]);
    if (!charCount[ch]) {
      //If a character is not found or its count becomes negative, they are not anagrams.
      return false;
    }
    charCount[ch]--;
  }
  // OR
  // Check if all frequencies are zero
  // for (let key in charCount) {
  //     if (charCount[key] !== 0) {
  //         return false;
  //     }
  // }
  return true;
};
console.log("check:", checkAnagram("tab", "bat"));