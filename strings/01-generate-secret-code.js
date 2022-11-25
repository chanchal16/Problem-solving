/**Q. Write a function that generates a secret code from a given string, by shifting 
characters of the alphabet by N places. 
Example:Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on. */

const generateSecretCode = (str,places)=>{
    let encodedStr = '';
    let encodedcode = 0
    // 1st way - but here prb is if  0 > encodedcode > 26 it won't work
    // for(let i=0; i<str.length; i++){
    //     let asciiVal = str[i].charCodeAt();
    //     encodedcode = asciiVal + places
    //     encodedStr += String.fromCharCode(encodedcode) 
    // }
    // 2nd way
    for(let i=0; i<str.length; i++){
        let asciiVal = str[i].charCodeAt()
        encodedcode = asciiVal + places % 26
        if( asciiVal >= 97 && asciiVal <=122 ){           
            if(encodedcode > 122){
                encodedcode -= 26
            }
        }else if(asciiVal >= 65 && asciiVal <=96){
            if(encodedcode > 96){
                encodedcode -= 26
            }
        }
        encodedStr += String.fromCharCode(encodedcode)
    }
    return encodedStr
}
console.log(generateSecretCode("neogcamp", 2))