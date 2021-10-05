// Dados mayor de dos números calcular cual es mayor cual es menor o si son iguales
/*
var first_number = window.prompt("Introduce the first number.", 0);
var second_number = window.prompt("Introduce the second number.", 0);

if(first_number > second_number) {
    document.write(first_number + " is greater than " + second_number);
} else if( second_number > first_number){
    document.write(second_number + " is greater than " + first_number);
}
*/


// calcular el mayor de tres números
/*
var first_number = window.prompt("Introduce the first number.", 0);
var second_number = window.prompt("Introduce the second number.", 0);
var third_number = window.prompt("Introduce the third number.", 0);

if(first_number > second_number && first_number > third_number){
    document.write(first_number + "Is the greater number.");
} else if (second_number > third_number && second_number > first_number){
    document.write(second_number + "Is the greater number.");
} else{
    document.write(third_number + "Is the greater number.");
}
*/

// Dado un número, calcular si es primo
/*
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
*/

// Teniendo como variables. precioproducto1, precioproducto2, descuento, iva (constante 21). Calcular el total de la factura
/*
var precioproducto1 = parseInt(window.prompt("Introduce the price of the 1st Product.", 0), 10);
var precioproducto2 = parseInt(window.prompt("Introduce the price of the 2nd Product.", 0), 10);

var descuento = window.prompt("Which is the discount?", 0);
const IVA = 21;

var bill = (precioproducto1 + precioproducto2);
bill = bill + bill * (IVA / 100);
bill = bill - (bill * (descuento / 100));

document.writeln("Precio Producto 1: " + precioproducto1);
document.write("<br>");
document.writeln("Precio Producto 2: " + precioproducto2);
document.write("<br>");
document.writeln("El precio de la cuenta es: " + bill);
document.write("<br>");
*/

// Dados tres números cualqueira mostrarlos de menor a mayor
/*
var first_number = parseInt(window.prompt("Introduce the 1st number.", 0), 10);
var second_number = parseInt(window.prompt("Introduce the 2nd number.", 0), 10);
var third_number = parseInt(window.prompt("Introduce the 3rd number.", 0), 10);

if(first_number >= second_number && first_number >= third_number){
    document.write("El primer número es el más grande.");
} else if(second_number >= third_number){
    document.write("El segundo número es el más grande.");
} else{
    document.write("El tercer número es el más grande.");
}
*/

// Repetir lo anterior pero de mayor a menor

// CALCULAR SI UN NÚMERO ES PAR O IMPAR.
/*
var number = parseInt(prompt("Introduce a number:", 0), 10);

let text = (number % 2 == 0) ? "El número " + number + " es par." : "El número " + number + " es impar.";
document.write(text);
*/

/**
 *  Almacenar en una variable el texto: Hola este texto tiene “comillas” en su contenido.
 *  Dado un numero calcular su cuadrado y su cubo
 *  Averiguar si una persona puede conducir a partir de dos variables: Edad y Tienecarnet (hacerlo sin operadores logicos y con operadores lógicos)
 */