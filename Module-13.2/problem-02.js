// Problem-2: Sum of a Range of Numbers 

function getSumOfNumbersInRange(startNumber, endNumber){
    let sum = 0;
    let num;
    for(let i = startNumber; i <= endNumber; i++){
        num = i;
        sum += num;
    }
    return sum;
}

console.log(getSumOfNumbersInBetween(7,9));