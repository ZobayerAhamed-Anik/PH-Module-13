//Problem-4: FizzBuzz (1 to n)
// Loop through numbers from 1 to n. If a number is divisible by 3, print "Fizz"; if divisible by 5, print "Buzz"; and if divisible by both, print "FizzBuzz"; otherwise, print the number itself.

function checkFizzBuzz(upToNumber){
    let fizzBuzz;
    for(let i = 1; i <= upToNumber; i++){
        if(i % 3 === 0 && i % 5 === 0){
            fizzBuzz = "FizzBuzz";
        }
        else if(i % 3 === 0){
            fizzBuzz = "Fizz";
        }
        else if(i % 5 === 0){
            fizzBuzz = "Buzz";
        }
        else fizzBuzz = i;
        console.log(i, " => ",fizzBuzz);
    }
}

console.log(checkFizzBuzz(15));