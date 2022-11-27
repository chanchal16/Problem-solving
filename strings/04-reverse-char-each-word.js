/**Given a sentence, your function should reverse the order of characters in each word,
 *keeping the same sequence of words.
Example:
Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen */

const reverseCharOfWord = (sentence)=>{
    let words = sentence.split(' ');
    let result = words.map(word=>{
        let chars = word.split('').reverse().join('')
        // console.log('chars',chars);
        return chars
    }).join(' ')
    return result;
}
console.log('reversed - ',reverseCharOfWord('we are neoGrammers'))