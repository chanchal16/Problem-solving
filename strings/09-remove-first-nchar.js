// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

const removeNChars = (str) =>{
    // let res = ''
    // for(let i=3; i<str.length; i++){
    //     console.log(str[i])
    //     res = res + str[i]
    // }
    // return res

    // 2nd way
    return str.slice(3)
    // return str.split('').slice(3).join('')

    // 3rd way
    // return str.substring(3)
}
console.log('remve - ',removeNChars('dfuoi'))

// Write a function that takes a string as argument. Extract the last 3 characters from the string. Return the result
const getLastChars=(str) => {
    // console.log(str.slice(3))
    return str.slice(-3)
    // return str.split('').slice(-3).join('')
}
console.log('last chars - ',getLastChars('react'))

// Write a function that takes a string (a) as argument. Get the first 3 characters of a. Return the result
const getFirstChars = (str) =>{
    return str.slice(0,3)
}
console.log('first 3 chars - ',getFirstChars('star'))