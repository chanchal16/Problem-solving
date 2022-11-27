// Write a program that takes two strings and copies smaller strings into a bigger string.

const copyStr = (str1,str2) => {
    let strlen1 = str1.length;
    let strlen2 = str2.length;

    if(strlen1 < strlen2){
       return str2 = str2.concat(str1)
    }else{
       return str1 = str1.concat(str2)
    }
}
console.log('copied str - ',copyStr('hey','hiiiiii'))