'use strict';

alert("Hello World!");

var nombre = "pepe";
var apellidos = "mata";
var whole_name = nombre + ' ' + apellidos;
var edad = 20;
var altura = 1.8;
var matriculado = true;
var pago = false;

console.log(whole_name);
console.log(nombre);
console.log(apellidos);
console.log(edad);
console.log(edad + altura);
console.log(matriculado + pago);
console.log(nombre + edad);

// USE LET
var age = 18;
var comprobacion = false;

if(age == 18){
    let comprobacion = true;
    console.log('Comprobacion dentro del IF: ' + comprobacion);
}

console.log('Comprobacion fuera del IF: ' + comprobacion);

const LIGHT_IVA = 21;
console.log(LIGHT_IVA);

// LIGHT_IVA = 10;




/*
alert("Bienvenido a DAW 2do");

document.write("Hola Mundo Document!");
console.log("Hola desde la consola");
*/