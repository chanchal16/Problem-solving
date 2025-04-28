/**Given an array of integers numbers and a number k, find the k most frequent 
 * numbers in the array. Here, k represents the number of elements that should be
 * returned, which are the ones that appear the most frequently. The order of the
 * result does not matter.
 * eg: Input: numbers = [4,4,4,6,6,5,5,5], k = 2
Output: [4,5]
Explanation: The two most frequent numbers are 4 and 5, as they appear the most often */

const mostCommonElements = (nums, k) => {
  /*Using a Hash Map and Sorting
    We'll first count the frequency of each number in the array using a hash map(js object).
    Then, we'll convert this map into an array of key-value pairs and sort it based
    on the frequencies in descending order. Finally, we'll take the first k elements.*/

  let frequencyMap = {};
  for (const num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  let sortedFrequencies = Object.entries(frequencyMap).sort(
    ([, freqA], [, freqB]) => freqB - freqA
  );
  console.log("sorted", sortedFrequencies);
  return sortedFrequencies.slice(0, k).map((n) => parseInt(n));
};
console.log(
  "most common elements are:",
  mostCommonElements([4, 4, 4, 6, 6, 5, 5, 5], 2)
);
