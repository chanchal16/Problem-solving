/* Write a function that takes two strings (a and b) as arguments. If a contains b,
 append b to the beginning of a. If not, append it to the end. Return the concatenation*/

const concatenateStr = (a,b) => {
    if(a.includes(b)){
        return b.concat(a)
    }else{
        return a.concat(b)
    }

    // 2nd way using indexof
    // return a.indexOf(b) === -1 ? a + b : b + a
}
console.log('concat - ',concatenateStr('cheese','cake'))
console.log('concat - ',concatenateStr('lips','s'))
console.log('concat - ',concatenateStr(' think, therefore I am', 'I'))