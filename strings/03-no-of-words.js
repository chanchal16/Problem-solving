// Given a sentence, your functions should return the number of words in the sentence.

const getNoOfWords = (sentence)=>{
    let totalWords = 0
    const words = sentence.split(' ')
    console.log(words)
    words.map(word=>{
      if(word !== ''){
        totalWords++
      }
    })
    return totalWords
  }
  console.log('total words - ',getNoOfWords(' I am developer '))