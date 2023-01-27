// Write a function that takes a string (a) as argument. Extract the first half a. Return the result
const getFirstHalfStr = (str) =>{
    return str.slice(0,str.length/2)
}
console.log('half str - ',getFirstHalfStr('chanchal'))