//Problem 5: Reversing a String

let myString = "programming";


function getReverse(myString){
    let myReversedString = "";
    for(let i = myString.length - 1; i >= 0; i--){
        let getLetter = myString[i];
        myReversedString += getLetter;
    }
    return myReversedString;
}

console.log(myString);
console.log(getReverse(myString));
console.log(getReverse("Bangladesh"));