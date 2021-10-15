'use strict';

var nombre = "Antonio";
var nombres = [nombre, "Pepe", "Lucas", "Juan", "Sonia", "Luisa"];
var datospersona = ["Antonio", "Sanchez", 24, true];
var ciudades = new Array("Córdoba", "Sevilla", "Jaén", "Málaga", "Cádiz", "Huelva", "Almeria");

document.write("<p> El Nombre es: " + nombre + "</p><br>");
document.write("<p> Los nombres son: " + nombres + "</p>");
document.write("<p> Los datos son: " + datospersona + "</p>");
document.write("<p> Las Ciudades son: " + ciudades + "</p>");

document.write(ciudades[0] + "<br>");
document.write(ciudades[5] + "<br>");
document.write(ciudades[3] + "<br>");

document.write(ciudades.length + "<br>");
document.write(ciudades.sort() + "<br>");
document.write(ciudades.sort() + "<br>");

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.write("<br>Número sorteados de forma abecedario:  " + numbers.sort() + "<br>");
document.write("Números correctamente ordenados:  " + numbers.sort( function(a, b){return (a - b)}) + "<br>");

