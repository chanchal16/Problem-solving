/**Find the length of the longest substring without repeating characters.
 * Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
 */

const getLongestSubstring = (str) => {
  let longestSubstringLength = 0; // Initialise a set to store the longest string in
  // Loop through the provided string
  // for(let i=0; i<str.length; i++ ){
  //     // Initialise a set to store the string created from the current point
  //     let currentStringSet = new Set();
  //     // Loop through the letters from the current point
  //     for(let j=i; j<str.length; j++){
  //          // Check if the current letter exists in the current Set
  //         if(currentStringSet.has(str[j])){
  //             break; // Move on from the current letter without adding it (as it already exists in the set)
  //         }else{
  //             // Character not found, add it to the set
  //             currentStringSet.add(str[j])
  //         }
  //     }
  //     // Update the longest string length (if this one was bigger)
  //     longestSubstringLength = Math.max(longestSubstringLength,currentStringSet.size)
  // }

  // USING TWO POINTERS
  let start = 0;
  let end = 0;
  let charSet = new Set();
  while (end < str.length) {
    if (!charSet.has(str[end])) {
      charSet.add(str[end]);
      longestSubstringLength = Math.max(longestSubstringLength, charSet.size);
      end++;
    } else {
      charSet.delete(str[start]);
      start++;
    }
  }
  return longestSubstringLength;

  // using array
  // Initialise an array to store the running characters and a longest string length variable
  // let currentString = [];
  // let longestString = 0;

  // for(const element of str){
  //     // Attempt to get the current character's position in the current string
  //     const currentCharPos = currentString.indexOf(element);
  //     // Check if the current character exists in the current string
  //     if(currentCharPos !== -1){
  //         // Chop the array off after the occurence of the character
  //         currentString.splice(0,currentCharPos+1)
  //     }
  //     // Add the current character to the array
  //     currentString.push(element);
  //     // Store the current string length if bigger than the existing record
  //     longestString = Math.max(longestString,currentString.length)
  // }
  // return longestString
};
console.log("length:", getLongestSubstring("abcabcbb"));