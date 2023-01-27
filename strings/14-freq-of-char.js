// Write a function that takes two strings (a and b) as arguments. Return the number of times a occurs in b.
const getFrequency = (a,b) => {
    let count = 0;
    for(let s of b){
        if(s === a){
            count++
        }
    }
    return count;

    // 2nd way
    // console.log(b.split(a))        //will split the str where a occurs
    // return b.split(a).length-1
}
console.log('frequency - ',getFrequency('m','mummamia'))
console.log('frequency - ',getFrequency('h','chanchal'))