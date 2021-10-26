# Desarrollo Web Entorno Cliente - DAW (MEDAC).
## Alberto Jose Marun Indriago.

[Pagina Web del Repositorio.](https://albertojmarun.github.io/DWEC/)

Este es un repositorio con la intención de que quede constancia del trabajo realizado en la asignatura de DWEC.

# Índice:
## 1. Practicas de Clase
- [Practica 1](#practica-1)
- [Practica 2](#practica-2)
<br>

## 2. JavaScript Folder (js/)
* [Ejercicio Memo](js/ejercicio_memo/)
* [bigger_three_numbers.js](js/bigger_three_numbers.js)
* [bill.js](js/bill.js)
* [compare_numbers.js](/js/compare_numbers.js)
* [drive_validation.js](js/drive_validation.js)
* [ejercicio_arrays.js](js/ejercicio_arrays.js)
* [holamundo.js](js/holamundo.js)
* [odd_even_number.js](js/odd_even_number.js)
* [order_array_of_numbers.js](js/order_array_of_numbers.js)
* [prime_number.js](js/prime_number.js)
* [quotation_marks.js](js/quotation_marks.js)
* [square_and_cubic.js](js/square_and_cubic.js)

***
# Practica 1
## 1. Ataque DoS y DDos. Información sobre cada uno de estos conceptos y un detallar un ejemplo destacado sobre cada uno de estos.
<br>

### Ataque DoS (Denial of Services)
Es un ataque que ocurre cuando se sobrecarga un servidor o unos servidores.
Suele ocurrir cuando hay un número excesivo de solicitudes por parte de usuarios (humanos y no-humanos).
Dicha sobrecarga se causa (en la mayoría de veces) de forma intencionada, superando la capacidad de solicitudes permitidas por el sistema, haciendolo más lento o inutilizandolo por completo. <sup>1</sup>

Para realizar el ataque, se puede realizar de dos maneras.
- __De forma orgánica:__ Una solicitud masiva para acceder a una sitio web de distintos usuarios humanos.

    __Ejemplo:__ Al liberar las entradas de "El Clásico" colapsa la página web del FCBARCELONA ya que excesivos usuarios solicitan entrar en la web para comprar las entradas para el evento.

- __De forma inorgánica:__  Mediante el uso múltiples máquinas programadas para acceder en determinado momento a un sitio web con la intención de colapsarlo.

    __Ejemplo:__ Se infectan distintos dispositivos con un virus informático con la intención de acceder a albertojmarun.github.io a determinado momento, con la intención de colapsar los servidores que almacenan dicho sitio web.
<br><br>

### Ataque DDoS (Distributed Denial of Service)
Es un ataque de Denegación de Servicios Distribuidos. Aprovecha los límites de capacidad aplicados a los recursos de la red de la infraestrctura sobre la cuál está basada el sitio web de la empresa.
El ataque envia múltiples (miles) de solicitudes al recurso web atacado con el fin de superar la capacidad del sitio web para gestionar múltiples solicitudes, evitando que funcione correctamente.

El objetivo de este ataque es evitar el funcionamiento nornal del recurso web.
Una forma de realizar este tipo de ataques es mediante las **"red zombis"**, las cuáles están conformadas por ordenadores infectados previamente, siendo el cibercriminal el que ejecuta código en dichas máquinas y colapsa el servidor deseado.

Los objetivos de estos ataques son:
- Tiendas online.
- Casinos online.
- Empresas que dependam de proporcionar servicios online.

Las consecuencias de estos ataques sobre los servicios son:
- Habrá lentitud en la respuesta de las distintas solicitudes.
- Posibilidad de ignorar múltiples o la totalidad de las solicitudes de los usuarios.

- __Ejemplo:__ El ataque realizado a una empresa financiera cliente de Cloudflare a la cuál evitaron un ataque DDoS, está estaba conformada por 20.000 dispositivos infectados con una versión de Mirai y le habían realizado 17,2MM de solicitudes HTTP/seg<sup>2</sup>
<br><br>
***

## 2. URI (Uniform Resource Identifier).
El identificador Uniforme de Recursos sirve para acceder a un recurso físico o abstracto por Internet.
Tipos de Recursos:
- Identificar una página web.
- Identificar al remitiente.
- Identificar al destinatario.

Las apps usan este identificador para interactuar con el recurso o consultar información sobre el mismo.
Los protocolos HTTP, FTP... funcionan gracias a esta sintaxis, identificando a que información debe acceder, cómo y donde.

La sintaxis de la URI es:
~~~
scheme :// authority path ? query # fragment
~~~
- *scheme*: información sobre el protocolo usado. 
- *authority*: identificador del dominio.
- *path*: ruta exacta del recurso.
- *query*: acción de la consulta.
- *fragment*: designa una parte del recurso principal.

Vale destacar que las barras (//) luegos de los puntos (:) solo son necesarias si hay contenido en _authority_, si contiene información del usuario se separa mediante el uso del signo de arroba (@).<sup>3</sup>

| URI RELATIVO | URI ABSOLUTO |
|--|--|
|Prescinde de algunas partes y solo se une al URI de base para completarlo.|Independiente del contexto y consta como mínimo de _scheme, authority y path_|
|Ya que prescinde del _scheme_, no pueden haber dos puntos (:) en el primer segmento de la ruta||
|Tipos de URI Relativo <br> **Enlace Relativo:** Comienza sin Barra <br> **Enlace Absoluto:** Comienza con una barra. <br> **Enlace de Red:** Comienza con dos barras. ||

*** 

## 3. Protocolos de seguridad SSL y TLS y cuándo es usado cada uno.

### SSL (Secure Sockets Layer).
La capa de Sockets Seguros, es una tecnología estándar para asegurar (desde el punto de vista de seguridad) una conexión a Internet, además de proteger la información confidencial que se envía entre dos sistemas e impedir que los ciberdelincuentes lean y modifiquen cualquier dato que sea transferido.
Estos sistemas pueden ser servidor - cliente o servidor - servidor.

Se asegura que todos los datos que se transfieren entre usuarios y sitios webs o entre dos servidores sean imposibles de leer.
Se consigue usando algoritmos de cifrado para la codificación de datos que se transmiten e impedir que ciberdelincuentes lean al ser enviados mediante una conexión.<sup>4</sup>

__Ejemplo:__ La conexión entre la App MAIL (De MacOS que es un cliente de corre electrónico) y el servidor de correo electrónico de GMAIL.
<br><br>

### TLS (Transport Layer Security).
La Seguridad de Capa de Transporte es una versión más actualizada y más segura de SSL.<sup>4</sup>

__Ejemplo:__ El uso del DNIe en las distintas webs del Gobierno de España.
***

## 4. Cifrado DES. Información detallada, porqué ya no es usado con de forma asidua y ejemplos sobre este tipo de cifrado.
El Cifrado DES (Data Encryption Standard) es un algoritmo de cifrado de clave símetrica publicado como un estándar FIPS (Federal Information Processing Standard) en 1976.
Este fue declarado poco seguro después de que en 1997, 1998 y 1999, ejecutarán tres desafíos (uno en cada año) y en el último, el cifrado se haya resuelto en aproximadamente 22 horas.

Fue suplantado por el Cifrado AES que es un algoritmo criptográfico más elegante y eficiente, siendo las longitudes de sus claves entre 128 - 256 bits, frente a las de 56 bits empleadas por DES.
Además, DES se ha dejado de usar ya que su implementación en software es poco eficiente.<sup>5</sup>
<br><br>
![Explicacion Algoritmo DES](https://1.bp.blogspot.com/-OMuBT4m24XA/WLKoUpoL4vI/AAAAAAAAHzE/fLhIYMPPqE8DgdwUzGQBrTdVJuDpQOh5QCLcB/s1600/Cifrado%2BDES_18.png)
<br>
Criptografía, Explicación Algoritmo DES.<sup>6</sup>
<br>
***

## 5. Ataque MID Información detallada sobre este tipo de ataque y ejemplo que explique su funcionamiento. Mencionar también un ejemplo conocido de ataque MID.
El ataque MID (Man In the Middle), conocido como "Hombre en el Medio" es uno de lo más conocidos y ejecutados por los ciberdelincuentes por la cantidad de información que se puede acceder en caso de tener éxito.
Se base en la intercepción de la comunicación entre 2 o más dispositivos, pudiendo suplantar la identidad de uno u otro según lo que necesite hacer para ver y/o modificar la información a antojo de él, de modo que la información recibida por uno o unos, puede ser la dada por el atacante y no por el locutor legítimo.
Son ataques muy difíciles de detectar, ya que emplean técnicas para que no sea detectado.

### Escenarios de Ataque:
* Puntos de Acceso WIFI abiertos o con baja seguridad. - __Ejemplo:__ Red de un Aeropuerto.

También puede ser que se imita el nombre de una red cercana (SSID) para confundir y algunas personas se conecten a ella, además de que muchos dispositivos están configurados por defecto para conectar con algunas redes sin preguntar.<sup>7</sup>

* Redes Locales (LAN). - __Ejemplo:__ Red del MEDAC.

Si el atacante tiene acceso a la red local corporativa, puede lanzar un ataque engañando a los demás equipos y haciendo creer que el dispositivo del atacante es uno más y cumple una determinada función, haciendo que todo el tráfico de data pase mediante el ordenador del ciberdelincuente.

* Software de Navegación anticuado. - __Ejemplo:__ Google Chrome no actualizado.

__Caso Real:__ La NSA (National Security Agency) de los Estados Unidos, se ha hecho pasar por Google para interceptar, almacenar y leer comunicaciones en línea de individuos.<sup>8</sup>
***

## 6. Ampliar la información proporcionada por el temario sobre las herramientas FTP y SSH.

### FTP
Al hacer una conexión de un cliente FTP a un servidor FTP, se usa el puerto 21 (por defecto, se puede usar otro) del servidor y se realizar una conexión TCP. Luego se transfieren los archivos deseados se puede hacer en el __Modo Activo:__ El cliente (usando un puerto superior al 1023) se comunica con el servidor, transfiriendo su propia dirección IP en el Puerto 21, haciendo saber en que puerto encuentra al cliente.<sup>9</sup>
Programas FTP:

||Desarrollador|Plataforma|Precio aprox.|
|--|--|--|--|
|Commander One|Eltima Software|macOS|30$|
|Cyberduck|Iterate|Windows, macOS|Gratis|
|FileZilla|Tim Koose|Windows, macOS, Linux|Gratis|
|FireFTP|Mime Čuvalo|Multiplataforma|Gratis|

### Clientes SSH
Son herramientas con la cuál se logran ejecutar comandos SHELL. Permitiendo así iniciar sesión en un servidor, descargar archivos y/o administrar archivos en el ordenador o en un servidor web.<sup>10</sup>

|Plataforma|Herramienta|
|--|--|
|MacOS|Terminal|
|Linux/Unix|Paquete OpenSSH|
|Windows|PowerShell|
|Windows|PuTTY (No viene por defecto, pero es famosa).|
|Chrome|Termius|

***

## Referencias:
1. [Know How. (2020, 1 octubre). Ataque DoS: ¿qué pasa durante un ataque denial of service? IONOS Digitalguide. Recuperado 22 de octubre de 2021.](https://www.ionos.es/digitalguide/servidores/know-how/que-es-un-ataque-dos/)
2. [Rus, C. (2021, 23 agosto). Cloudflare dice haber mitigado el mayor ataque DDoS de la historia: 17,2 millones de peticiones por segundo. Xataka. Recuperado 23 de octubre de 2021.](https://www.xataka.com/seguridad/cloudflare-dice-haber-mitigado-mayor-ataque-ddos-historia-17-2-millones-peticiones-segundo)
3. [URI: ¿qué es el identificador de recursos uniforme? (2021, 21 octubre). IONOS Digitalguide. Recuperado 23 de octubre de 2021.](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/uri-identificador-de-recursos-uniformes/)
4. [¿Qué es SSL? (2020, 27 abril). GlobalSign GMO Internet, Inc. Recuperado 24 de octubre de 2021.](https://www.globalsign.com/es/ssl-information-center/what-is-ssl)
5. [Rodríguez, D. (2019, 18 mayo). Comparación entre los cifrados DES y AES. Analytics Lane. Recuperado 24 de octubre de 2021.](https://www.analyticslane.com/2019/07/08/comparacion-entre-los-cifrados-des-y-aes/)
6. [García Larragan, M. (2017, 26 febrero). S-Caja [Ilustración].](https://1.bp.blogspot.com/-OMuBT4m24XA/WLKoUpoL4vI/AAAAAAAAHzE/fLhIYMPPqE8DgdwUzGQBrTdVJuDpQOh5QCLcB/s1600/Cifrado%2BDES_18.png)
7. [El ataque del “Man in the middle” en la empresa, riesgos y formas de. (2020, 16 julio). INCIBE. Recuperado 25 de octubre de 2021.](https://www.incibe.es/protege-tu-empresa/blog/el-ataque-del-man-middle-empresa-riesgos-y-formas-evitarlo)
8. [portaltic. (2013, 17 diciembre). La NSA utilizó ataques MITM para acceder a información encriptada. europapress.es. Recuperado 25 de octubre de 2021.](https://www.europapress.es/portaltic/internet/noticia-nsa-utilizo-ataques-mitm-acceder-informacion-encriptada-20130913122227.html)
9. [Cuestiones Técnicas. (2020, 24 noviembre). Los 9 mejores FTP clients para Windows & Mac. IONOS Digitalguide. Recuperado 25 de octubre de 2021.](https://www.ionos.es/digitalguide/hosting/cuestiones-tecnicas/los-mejores-clientes-ftp-para-el-alojamiento-web/)
10. [Security check. (2021, 24 junio). DreamHost. Recuperado 25 de octubre de 2021.](https://help.dreamhost.com/hc/es/articles/215360828-Software-de-clientes-de-SSH)

***
***

1. [Know How. (2020, 1 octubre). Ataque DoS: ¿qué pasa durante un ataque denial of service? IONOS Digitalguide. Recuperado 22 de octubre de 2021.](https://www.ionos.es/digitalguide/servidores/know-how/que-es-un-ataque-dos/)
2. [Rus, C. (2021, 23 agosto). Cloudflare dice haber mitigado el mayor ataque DDoS de la historia: 17,2 millones de peticiones por segundo. Xataka. Recuperado 23 de octubre de 2021.](https://www.xataka.com/seguridad/cloudflare-dice-haber-mitigado-mayor-ataque-ddos-historia-17-2-millones-peticiones-segundo)
3. [URI: ¿qué es el identificador de recursos uniforme? (2021, 21 octubre). IONOS Digitalguide. Recuperado 23 de octubre de 2021.](https://www.ionos.es/digitalguide/paginas-web/desarrollo-web/uri-identificador-de-recursos-uniformes/)
4. [¿Qué es SSL? (2020, 27 abril). GlobalSign GMO Internet, Inc. Recuperado 24 de octubre de 2021.](https://www.globalsign.com/es/ssl-information-center/what-is-ssl)
5. [Rodríguez, D. (2019, 18 mayo). Comparación entre los cifrados DES y AES. Analytics Lane. Recuperado 24 de octubre de 2021.](https://www.analyticslane.com/2019/07/08/comparacion-entre-los-cifrados-des-y-aes/)
6. [García Larragan, M. (2017, 26 febrero). S-Caja [Ilustración].](https://1.bp.blogspot.com/-OMuBT4m24XA/WLKoUpoL4vI/AAAAAAAAHzE/fLhIYMPPqE8DgdwUzGQBrTdVJuDpQOh5QCLcB/s1600/Cifrado%2BDES_18.png)
7. [El ataque del “Man in the middle” en la empresa, riesgos y formas de. (2020, 16 julio). INCIBE. Recuperado 25 de octubre de 2021.](https://www.incibe.es/protege-tu-empresa/blog/el-ataque-del-man-middle-empresa-riesgos-y-formas-evitarlo)
8. [portaltic. (2013, 17 diciembre). La NSA utilizó ataques MITM para acceder a información encriptada. europapress.es. Recuperado 25 de octubre de 2021.](https://www.europapress.es/portaltic/internet/noticia-nsa-utilizo-ataques-mitm-acceder-informacion-encriptada-20130913122227.html)
9. [Cuestiones Técnicas. (2020, 24 noviembre). Los 9 mejores FTP clients para Windows & Mac. IONOS Digitalguide. Recuperado 25 de octubre de 2021.](https://www.ionos.es/digitalguide/hosting/cuestiones-tecnicas/los-mejores-clientes-ftp-para-el-alojamiento-web/)
10. [Security check. (2021, 24 junio). DreamHost. Recuperado 25 de octubre de 2021.](https://help.dreamhost.com/hc/es/articles/215360828-Software-de-clientes-de-SSH)

***
***

# Practica 2

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
<sup>14</sup>
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

## Referencias
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