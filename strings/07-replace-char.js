/* Given an input string S and two characters c1 and c2, you need to replace every 
occurrence of character c1 with character c2 in the given string.*/

const replaceChar = (str,c1,c2)=>{
    let replacedStr = ''
    for(let s of str){
        if(s === c1){
            s = c2
        }
        replacedStr += s;
    }
    return replacedStr
}
console.log('replace - ',replaceChar('hello','l','i'))