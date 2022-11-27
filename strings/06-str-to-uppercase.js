// Write a program that converts the string into uppercase.
const strToUpperCase = (str)=>{
    let strUpperCased = ''
    for(let s of str){
        let ascii = s.charCodeAt() //gives ascii val of that specific char
        if(97 <= ascii <= 122  ){
            ascii -= 32;
        }
        strUpperCased += String.fromCharCode(ascii); //returns char of the given ascii value
    }
    return strUpperCased;
}
console.log(strToUpperCase('hey'))