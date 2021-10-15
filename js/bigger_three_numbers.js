// calcular el mayor de tres números
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