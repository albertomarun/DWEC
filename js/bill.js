// Teniendo como variables. precioproducto1, precioproducto2, descuento, iva (constante 21). Calcular el total de la factura
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