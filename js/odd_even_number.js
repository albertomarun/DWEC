// CALCULAR SI UN NÚMERO ES PAR O IMPAR.
var number = parseInt(prompt("Introduce a number:", 0), 10);

let text = (number % 2 == 0) ? "El número " + number + " es par." : "El número " + number + " es impar.";
document.write(text);