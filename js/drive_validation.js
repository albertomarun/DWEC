'use strict';
/** Averiguar si una persona puede conducir a partir de dos variables:
 *  Edad y Tienecarnet
 *  (hacerlo sin operadores logicos y con operadores lógicos)
*/
var age = parseInt(prompt("Introduce your age:", 1), 10);
var license = boolean(prompt("Do you have license? (true or false)", false));

document.write("Edad: " + age + "años <br>");
document.write("Licencia: " + license + "<br>");

// Sin operadores lógicos.
if(age >= 16){
    if(license){
        document.write("¡Felicitaciones por el Carnet!<br>");
    } else{
        document.write("Deberías sacarte el Carnet. <br>");
    }
} else{
    document.write("Lo siento no tienes edad para conducir.");
}

document.write("____________________________________________<br>");

// Con operadores lógicos.
if(age >= 16 && license){
    // Tiene más de 16 años y tiene carnet de conducir.
    document.write("¡Felicitaciones por el Carnet!<br>");
} else if(age >= 16 && !license){
    // Tiene más de 16 años y pero no tiene carnet de conducir.
    document.write("Deberías sacarte el Carnet. <br>");
} else{
    // No tiene edad para conducir por ende no debe tener licencia.
    document.write("Lo siento no tienes edad para conducir.");
}