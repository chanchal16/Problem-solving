/**Given a sentence, your function should reverse the order of characters in each word,
 *keeping the same sequence of words.
Example:
Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen */

const reverseCharOfWord = (sentence) => {
  let words = sentence.split(" ");
  let result = words
    .map((word) => {
      let chars = word.split("").reverse().join("");
      // console.log('chars',chars);
      return chars;
    })
    .join(" ");
  return result;
};
console.log("reversed - ", reverseCharOfWord("we are neoGrammers"));

/* Reverse a string - Write a function to reverse a string without using extra space.
 input - good moring!
 output - !gnirom doog
*/

const reverseString = (str) => {
  let words = str.split("");
  // using two pointer
  let start = 0;
  let end = words.length - 1;

  while (start < end) {
    [words[start], words[end]] = [words[end], words[start]];
    start++;
    end--;
  }
  return words.join("");
};
console.log("reverse string:", reverseString("good morning"));