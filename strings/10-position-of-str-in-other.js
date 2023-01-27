/* Write a function that takes a string as argument. The string contains the 
substring 'is'. Return the index of 'is'.*/

const findPosition = (str) =>{
    if(str.includes('is')){
        return str.indexOf('is')
    }

    // 2nd way
    // for(let i=0; i<str.length; i++){
    //     if(str[i] === 'i' && str[i+1] === 's'){
    //         return i
    //     }
    // }
}
console.log('pos - ',findPosition('risk'))