# Practica 2
# Índice:
- [Practica 2](#practica-2)
- [Índice:](#índice)
  - [1. HTML5. Historia, curiosidades, características principales.](#1-html5-historia-curiosidades-características-principales)
    - [Historia.](#historia)
    - [Curiosidades.](#curiosidades)
    - [Características Principales.](#características-principales)
  - [2. CSS3. Historia, curiosidades, características principales.](#2-css3-historia-curiosidades-características-principales)
    - [Historia.](#historia-1)
    - [Curiosidades.](#curiosidades-1)
    - [Características Principales.](#características-principales-1)
  - [3. JavaScript. Historia, curiosidades, características principales.](#3-javascript-historia-curiosidades-características-principales)
    - [Historia.](#historia-2)
    - [Curiosidades.](#curiosidades-2)
    - [Características Principales.](#características-principales-2)
  - [4. ¿Qué son WebKit y Blink?](#4-qué-son-webkit-y-blink)
    - [WebKit](#webkit)
    - [Blink](#blink)
  - [5. WebKit. Historia, curiosidades, características principales e información básica sobre este.](#5-webkit-historia-curiosidades-características-principales-e-información-básica-sobre-este)
    - [Historia.](#historia-3)
    - [Curiosidades.](#curiosidades-3)
    - [Características Principales.](#características-principales-3)
    - [Información Básica.](#información-básica)
  - [6. Ejemplos de navegadores web que usen WebKit, Blink y otro similar que encuentren.](#6-ejemplos-de-navegadores-web-que-usen-webkit-blink-y-otro-similar-que-encuentren)
- [Referencias](#referencias)

***
## 1. HTML5. Historia, curiosidades, características principales.
HyperText Markup Language 5

### Historia.
Su desarrollo comenzó en 2004 y fue publicado en 2014, este fue apoyado por el W3C (World Wide Web Consortium) abandonando así a XHTML.
HTML llego a ser (y es a día de hoy) un referente en el desarrollo de páginas web.

HTML5 es la quinta revisión importante en el lenguaje, HTML fue creado en 1991 y progresivamente ha tenido sus evoluciones además de la incorporación de CSS y JavaScript.
En el se incluyen nuevas etiquetas, soportando así distintos tipos de datos y mejorando el desarrollo de las páginas web.<sup>1</sup>
<br><br>

### Curiosidades.
* Su sintaxis es compatible tanto con HTML4 y XHTML 1.0
* Para definir el juego de caracteres a usar se usa en un atributo de la etiqueta meta:
`<meta charset="utf-8">` aunque se puede usar el método tradicional.
* Ahora el DOCTYPE se declara así: `<!DOCTYPE html>`.
* Permite la inclusión de elementos SVG y MathML.

|Elementos:|Atributos:|
|--|--|
|Se introducen:|
|`section, article, aside, header, footer...`|`media, charset, autofocus, placeholder...`|
|Se cambian:|
|`<a></a> <b></b> <i></i> <menu></menu>...`|`type, name, summary..`|
|Se desaparecen:|
|`<basefont></basefont> <big></big> <center></center>...`|`align, background, bgcolor...`|

* Mejora en las API: `getElementByClassName() y innerHTML`<sup>2</sup>

<br>

### Características Principales.
* Se crearon etiquetas con caracter semántico para que los motores de búsqueda identifiquen que representa cada contenido.
Destacando etiquetas como:
~~~
<body></body> <main></main> <section></section> <footer></footer
~~~
* Permite la comunicación con el servidor mediante el uso de WebSockets, Eventos del Servidor o WebRTC
* Se puede navegar por las páginas web de forma local, operando sin internet.
* Se añade un mejor soporte al contenido multimedia permitiendo reproducir audio y video sin necesidad de componentes o plugins reproduciendo dicho contenido de forma nativa.
* Capacidad de mostrar gráficos/efectos tanto Bidimensionales (2D) como Tridimensionales (3D).
* Posee la capacidad de tener acceso al dispositivo para dar uso a la cámara, geolocalización, giroscópio...
* Inclusión de CSS3 en el sentido de que se puede operar con CSS desde el mismo documento HTML como anexando una hoja de estilo.<sup>3</sup>
<br><br>

***

## 2. CSS3. Historia, curiosidades, características principales.
Cascading Style Sheets 3, es un lenguaje usado para definir la presentación de un documento estructurado escrito en HTML o XML.<sup>4</sup></sup>

### Historia.
Luego de la creación de SGML la W3C (World Wide Web Consortium) propuso la creación de un lenguaje de hojas de estilos específico para que trabajará con HTML (1990).
De todas las propuestas, destacaron dos: __CHSS__(Cascading HTML Style Sheets) y __SSP__(Stream-based Style Sheet Proposal), ambos creadores (Hakon Wium Lie y Bert Bos respectivamente) unificaron ambas ideas y definieron el lenguaje CSS.

A eso de 1995, el W3C añadió CSS al grupo de trabajo de HTML apostando así por su desarrollo y estandarización del lenguaje y en 1996 se publicó la primera recomendación oficial __"CSS1"__

En 1998, luego de que se separara el grupo de trabajo HTML en HTML, CSS y DOM, CSS presenta su segunda versión: __"CSS2"__<sup>5</sup>
<br><br>

### Curiosidades.
1. El primer buscador en soportar completamente CSS1 fue la versión de Mac (Apple) de Internet Explorer.
2. Se puede especificar dentro de un selector descendiente.
3. Hay selectores universales, en este caso el Asterisco (*).
4. El navegador lee los selectores de derecha a izquierda (Como los lenguajes arábicos).
5. Hay propiedades que tienen mayor peso en nuestra web que otras.
6. Si se aplican dos estilos, el último declarado (el que este al final) será el que se aplicará.<sup>6</sup>
<br><br>

### Características Principales.
* El atributo de poder graduar colores en los bordes con CSS.
* Los Bordes Redondeados.
* Poder poner 2 o más imágenes de fondo.
* Uso de colores RGBA.
* Con __word-wrap__ se pueden romper las palabras que son demasiado largas y no caben en su totalidad por la anchura de la caja en la que se encuentran.
* Textos multi-columnas.
* Aplicar imágenes a los bordes con __border-image__.
* Resplandor Exterior y Sombras con __box-shadow__.
* Se decide la posición de la imagen de fondo con respecto al borde, padding y/o contenido del elemento: __Background-origin__.
* Para definir como renderizar el contenido cuando sobrepasa los límites de un contenedor: __overflow-x y overflow-y__.
* Permite el uso de cualquier fuente en la web con __@font-face__.
* Aplicar sombras a los textos con __text-shadow__.<sup>4</sup>
<br><br>
***

## 3. JavaScript. Historia, curiosidades, características principales.
También abreviado JS. Es un lenguaje de programación interpretado. Definido como orientado a objetos, basado en prototipos, imperativo, de tipado débil y dinámico.
Es usado primordialmente en el Entorno del Servidor, siendo implementado también como parte del navegador web permitiendo mejoras tanto en la interfaz de usuario y páginas web dinámicas.<sup>7</sup>

### Historia.
Se introujo en 1995 para agregar programas a páginas web en el navegador Netscape Navigator.
También se buscaba un lenguaje que se ejecutára en el navegador del usuario para que cuando este se equivocara en un formulario (lo más común de la época), no tuviera que esperar tanto tiempo, sino que fuera casi inmediato.

Actualmente se usa también en el Entorno del Servidor, bases de datos como MongoDB y CouchDB, usan JavaScript como lenguaje tanto de script como de consulta y el proyecto de Node.js que proporciona un enotrno para la programación de JS fuera de los navegadores.<sup>8</sup>
<br><br>

### Curiosidades.
1. Null es un Objeto.
2. NaN es un número.
3. Un array vacio igualado a falso es verdadero `array() == False`.
4. replace() acepta como parámetro funciones callback.
5. Las expresiones regulares se pueden testear con __test()__ y __match()__
6. Puedes falsear el alcance de una variable o función.
7. Uno función se puede ejecutar a sí misma.
8. Firefox no lee, ni devuelve los colores en hexadecimal sino en RGB.
9. Undefined puede ser definido, es decir, no es una palabra reservada.<sup>9</sup>
<br><br>

### Características Principales.
1. Lenguaje Orientado a Objetos.
2. De tipado débil o no tipado.
3. Del Lado del Cliente.
4. De Alto Nivel.
5. Lenguaje Interpretado.
6. Usado por Múltiples Desarrolladores. <sup>10</sup>
<br><br>
***

## 4. ¿Qué son WebKit y Blink?
### WebKit
Es un motor de navegación web de código abierto, además de ser un framework de MacOsX, usado para construir aplicaciones como Safari, Dashboard, Mail...

Al denominarlo framework se entiende como un programa mediante el cuál se facilita el desarrollo de otros programas. WebKit facilita la creación de aplicaciones que tienen funcionalidades como las que se puede encontrar en Safari.<sup>11</sup>
<br><br>

### Blink
Es un motor de renderizado para navegadores de código abierto desarrollado por Google, que forma parte Chromium. Siendo una copia de la librería WebCore de WebKit, encargada del diseño renderizado y del DOM.<sup>12</sup>
<br><br>

***

## 5. WebKit. Historia, curiosidades, características principales e información básica sobre este.
### Historia.
WebKit se creo haciendo referencia de librerías de KDE (KHTML para interpretar HTML y KJS para interpretar KJS).
Luego de unirse, en 2005 se liberó el software como Open Source.

Con el paso del tiempo, el abanico de software con el que han operado se ha extendido a RSS, Depuradores, Herramientas de Desarrollo, Editores de Texto, Navegadores Web...<sup>11</sup>

### Curiosidades.
* Es tanto un framework como un motor renderizado de HTML.
* Es usado por distintas aplicaciones, con distintos propósitos.<sup>13</sup>
<br><br>

### Características Principales.
* Esta desarrollado en Objective-C.
* Es posible interactuar con un servidor web para recuperar y renderizar páginas web, descargar archivos y administrar plugins.
* Incluye frameworks de bajo nivel como: "WebCore y JavaScriptCore".
* Incluye un depurador JavaScript denominado Drosera.
<br><br>

### Información Básica.
Instalar WebKit MacOS
~~~~
git clone https://github.com/WebKit/WebKit.git WebKit
~~~~

Instalar WebKit Windows
~~~
git clone <git://git.webkit.org/WebKit.git>
~~~

Build WebKit
~~~
build-webkit --debug
~~~

Para correr WebKit, usar cualquiera de los comandos:
~~~
$run-safari
$run-webkit-app
run-safari --ios-simulator
~~~
<sup></sup>
<br><br>

***

## 6. Ejemplos de navegadores web que usen WebKit, Blink y otro similar que encuentren.
|Motor|Navegadores|
|--|--|
|WebKit| Dolphin Browser, Firefox (iOS), Microsoft Edge (iOS), Midori, GNOME (Web), Safari|<sup></sup>
|Blink| Chromium, Chrome, Opera, Brave, Vivaldi, Maxthon, MicrosoftEdge|<sup></sup>
|Gecko| Camino (MacOsX), Epiphany (GNOME), Firefox, Waterfox, Flock, Fennec, Minimo.|<sup></sup>

<sup>15</sup>

***
# Referencias
1. [Hernandez, I. (2019, 24 marzo). Historia de HTML5. historiahml5lab3. Recuperado 25 de octubre de 2021.](https://historiahml5lab3.blogspot.com/2019/03/historia-de-html5-podria-decirse-que.html)
2. [Luján Mora, S. (2011, 17 enero). ¿Cuáles son las diferencias entre HTML4 (XHTML 1.0) y HTML5? blogs Universidad de Alicante. Recuperado 25 de octubre de 2021.](https://blogs.ua.es/pi/2011/01/17/%C2%BFcuales-son-las-diferencias-entre-html4-xhtml-1-0-y-html5/)
3. [Definición, características y nuevas etiquetas de HTML5. (2018, 23 abril). El Padawan. Recuperado 25 de octubre de 2021.](http://www.elpadawan.com/html/definicion-caracteristicas-y-nuevas-etiquetas-de-html5#simple-table-of-contents-14)
4. [EcuRed. (s. f.). CSS3 - EcuRed. Recuperado 25 de octubre de 2021.](https://www.ecured.cu/CSS3)
5. [Garcia, G. (2015, 14 abril). HISTORIA DE CSS [Diapositivas]. Prezi.Com.](https://prezi.com/qihmvzmiyxqn/historia-de-css/)
6. [R. (2019, 4 abril). Curiosidades sobre CSS que no sabías. Marketing Aparte. Recuperado 25 de octubre de 2021, de R. (2019, 4 abril). Curiosidades sobre CSS que no sabías. Marketing Aparte. Recuperado 25 de octubre de 2021.](https://marketingaparte.com/boulevard/internet-y-paginas-web/curiosidades-sobre-css-que-no-sabias/)
7. [JavaScript. (2021, 18 octubre). En Wikipedia, la enciclopedia libre.](https://es.wikipedia.org/wiki/JavaScript)
8. [Robledano, Á. (2021, 23 agosto). Qué es Javascript. OpenWebinars.net. Recuperado 26 de octubre de 2021.](https://openwebinars.net/blog/que-es-javascript/#:%7E:text=JavaScript%20se%20introdujo%20en%201995,en%20el%20navegador%20Netscape%20Navigator.&text=Con%20unas%20aplicaciones%20web%20cada,en%20el%20navegador%20del%20usuario)
9. [Sánchez, C. (2011, 8 junio). 10 Curiosidades sobre Javascript. Creativos Online. Recuperado 26 de octubre de 2021.](https://www.creativosonline.org/10-curiosidades-sobre-javascript.html)
10. [E. (2021, 1 octubre). ¿Qué es Javascript? Características y Librerías. everis school. Recuperado 26 de octubre de 2021.](https://www.everisschool.com/blog/que-es-javascript-caracteristicas-librerias/)
11. [Qué es Webkit. (2008, 15 julio). Desarrollo Web. Recuperado 26 de octubre de 2021.](https://desarrolloweb.com/articulos/que-es-webkit.html)
12. [Blink - Glosario | MDN. (2021, 25 octubre). MDN Web Docs. Recuperado 26 de octubre de 2021.](https://developer.mozilla.org/es/docs/Glossary/Blink)
13. [EcuRed. (s. f.). Webkit - EcuRed. Recuperado 26 de octubre de 2021.](https://www.ecured.cu/Webkit)
14. [Getting Started. (2021, 19 octubre). WebKit. Recuperado 26 de octubre de 2021.](https://webkit.org/getting-started/)
15. [The WebKit Open Source Project. (2020, 23 marzo). WebKit. Recuperado 26 de octubre de 2021, de https://webkit.org/project/](https://webkit.org/project/)

***
***
[Volver Arriba](#practica-2)

[Volver a la Página Principal](https://github.com/albertojmarun/DWEC)