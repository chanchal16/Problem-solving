// Write a function that takes a string (a) as argument. Remove the first 3 characters of a. Return the result

const removeNChars = (str) =>{
    // let res = ''
    // for(let i=3; i<str.length; i++){
    //     console.log(str[i])
    //     res = res + str[i]
    // }
    // return res

    // 2nd way
    // return str.split('').slice(3).join('')

    // 3rd way
    return str.substring(3)
}
console.log('remve - ',removeNChars('dfuoi'))