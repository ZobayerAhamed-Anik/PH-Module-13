//Problem-1:    Check if a number is Even or Odd

function oddOrEven(number){
    if(number % 2 === 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}

//answer-check:
console.log(oddOrEven(48));
console.log(oddOrEven(57));