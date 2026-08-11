//Problem-3: Factorial of a Number...

function factorial(number){
    if(number === 0){
        return 1;
    }
    
    let fact = 1;
    for(let i = number; i > 0; i--){
    fact *= i;
    }
    return fact;
}

console.log(factorial(7));