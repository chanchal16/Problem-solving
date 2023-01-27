// Write a function that takes a string (a) as argument. Remove the last 3 characters of a. Return the result
const removeLastNChars = (str) =>{
    // return str.slice(0,-3)

    // 2nd way
    let result = ''
    for(let i=0; i<str.length-3; i++){
        result= result + str[i]
    }
    return result
}
console.log('remove last chars - ',removeLastNChars('morning'))