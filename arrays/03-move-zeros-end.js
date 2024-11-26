/* Move all zeros in an array to the end while maintaining the relative order of 
the non-zero elements.
Input: arr[] = {1, 2, 0, 4, 3, 0, 5, 0}
Output: arr[] = {1, 2, 4, 3, 5, 0, 0, 0}
Explanation: There are three 0s that are moved to the end. */

const moveZeros = (arr) =>{
    let pos = 0;  // Position to place non-zero elements
    // Move all non-zero elements to the front of the array
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== 0){
            // Swap non-zero element with the position pointer
            [arr[pos],arr[i]] = [arr[i],arr[pos]];
            pos++;
        }
    }
    return arr;
}
console.log(moveZeros([1, 2, 0, 4, 3, 0, 5, 0]));