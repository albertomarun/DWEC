// Dado un número, calcular si es primo
var number = prompt("Introduce a number", 0);
var prime_number = true;

for(var i = 2; number > 1 && i < (number / 2); i++){
    if(number % i == 0){
        prime_number = false;
    }
}

if(prime_number){
    document.write(number + " is prime.");
} else{
    document.write(number + " is not prime.");
}