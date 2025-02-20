function reverseWords(sentence){
    const words = sentence.match(/\b\w+\b/g);
    console.log(words);
    
}

console.log(reverseWords("Hello word"));
