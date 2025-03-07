/**Return the index of the first occurrence of a substring in a string or -1
 * if it is not present.
 * Input - hello , substring - ll
 * output - 2 */

const strstr = (haystack, needle) => {
  // using built-in indexOf
  // return haystack.indexOf(needle);

  if (needle === "") return 0;
  let n = haystack.length,
    m = needle.length;
  // using sliding window - brute force
  //Iterate over haystack, extracting substrings of needle.length.
  for (let i = 0; i < n - m; i++) {
    if (haystack.substring(i, i + m) === needle) {
      return i; // Found match
    }
  }

  // two pointer approach
  /*Iterate haystack while checking character-by-character with needle using 
    a second pointer*/
  for (let i = 0; i < n - m; i++) {
    let j = 0;
    while (j < m && haystack[i + j] === needle[j]) {
      j++;
    }
    if (j === m) return i; // Found full match
  }
  return -1;
};
console.log(strstr("hello", "ll"));