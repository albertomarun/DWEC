// Dados tres números cualquiera mostrarlos de menor a mayor
var first_number = parseInt(window.prompt("Introduce the 1st number.", 0), 10);
var second_number = parseInt(window.prompt("Introduce the 2nd number.", 0), 10);
var third_number = parseInt(window.prompt("Introduce the 3rd number.", 0), 10);

var numbers = [first_number, second_number, third_number];

numbers.sort( function (a, b){
    return a - b;
});

document.write("Ordenados de Menor a Mayor: " + numbers + "<br>");

// Repetir lo anterior pero de mayor a menor
numbers.sort( function (a, b){
    return b - a;
});

document.write("Ordenados de Mayor a Menor: " + numbers + "<br>");