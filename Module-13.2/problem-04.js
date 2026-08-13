//Problem-4: FizzBuzz (1 to n)
// Loop through numbers from 1 to n. If a number is divisible by 3, print "Fizz"; if divisible by 5, print "Buzz"; and if divisible by both, print "FizzBuzz"; otherwise, print the number itself.

function checkFizzBuzz(number){
    if(number % 3 === 0 && number % 5 === 0){
        return "FizzBuzz";
    }
    else if(number % 3 === 0){
        return "Fizz";
    }
    else if(number % 5 === 0){
        return "Buzz";
    }
    else return number;
}

console.log(checkFizzBuzz(12));
console.log(checkFizzBuzz(10));
console.log(checkFizzBuzz(15));
console.log(checkFizzBuzz(77));
