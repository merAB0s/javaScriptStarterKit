function isPrime(number) {
    let counter = 0
    for (let i = 1; i <number; i++){
        if (number%i == 0){
            counter++;
        }
    }

    if (number == 1 || number == 0){
        return false
    }
    if (counter>2){
        return false
    }
    else{
        return true
    }


}

console.log("*************************stage 1************************")
function findPrime(...numbers) {

    numbers.forEach(numbers => {

        if (numbers<0){
            console.log("Negative numers can not be prime numbers: " + numbers)
        }
        else {
            if(isPrime(numbers)){
                console.log(numbers + " is a prime number.")
            }
            else{
                console.log(numbers + " is a not prime numer.")
            }
        }
    })
}
findPrime(-20,2,1,0,20,7)


console.log("*************************stage 2************************")
function isFriendNumbers(nu1,nu2) {

    
}