// Given a sentence, return a sentence with first letter of all words as capital.

const capitalizeChar = (sentence)=>{
    let words = sentence.split(' ');
    return words.map(word=>word[0].toUpperCase() + word.substring(1)).join(' ')
}
console.log('capitalize - ',capitalizeChar("hey joey, what's up?"))