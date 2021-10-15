// Dados mayor de dos números calcular cual es mayor cual es menor o si son iguales
var first_number = window.prompt("Introduce the first number.", 0);
var second_number = window.prompt("Introduce the second number.", 0);

if(first_number > second_number) {
    document.write(first_number + " is greater than " + second_number);
} else if( second_number > first_number){
    document.write(second_number + " is greater than " + first_number);
}