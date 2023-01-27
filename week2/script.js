//Pig Latin Translator By Sam Smolen 1/15/23

//returns true if character if a vowel otherwise false
function isCharacterVowel(char) {
    let lcChar = char.toLowerCase();
    let vowels = ["a","e","i","o","u"];
    return vowels.includes(lcChar);
}
//returns word in pig latin
function getPigLatinForWord(word) {
    let firstChar = word.substring(0, 1);
    let secondChar = word.substring(1, 2);
    let isVowel = isCharacterVowel(firstChar);
    if (isVowel) {
        return (word + "way");
    } else { //Is a consanant
        isVowel = isCharacterVowel(secondChar);
        if (isVowel) {
            return (word.substring(1)+ firstChar + "ay");
        } else {
            return (word.substring(2)+ firstChar + secondChar + "ay");
        }
    }
}
let userInput = prompt("Enter a word or phrase to translate into Pig Latin");
if (userInput.length == 0) {
    console.log("Warning: Enter a word or Phrase");
    
}else {
    let userInputWords = userInput.split(" ");
    let text = "";
    for (let i = 0; i < userInputWords.length; i++) {
        text += getPigLatinForWord(userInputWords[i]) + " ";
    }
    console.log(text);
}