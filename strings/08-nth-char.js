// Write a function that takes a string (a) and a number (n) as argument. Return the nth character of 'a'.

const nthChar = (str,n) =>{
    for(let i=0; i<str.length;i++){
        if(i === n){
           return str[i]
        }
     }

    // 2nd way
    // return str.charAt(n)

}
console.log(nthChar('abc',2))