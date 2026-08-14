//Problem 6: Count Vowel in a String. vowel
let myString = "programming hero";
function countVowels(myString){
    let vowels = "aeiou";
    let count = 0;

    for(let i = 0; i < myString.length; i++){
        letter = myString[i];

        if (vowels.includes(letter)){
            count++;
        }
    }
    return count;
}

console.log(myString + " has " + countVowels(myString) + " vowels.");
console.log("bangladesh has " + countVowels("bangladesh") + " vowels.");
