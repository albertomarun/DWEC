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
<img src="https://1.bp.blogspot.com/-OMuBT4m24XA/WLKoUpoL4vI/AAAAAAAAHzE/fLhIYMPPqE8DgdwUzGQBrTdVJuDpQOh5QCLcB/s1600/Cifrado%2BDES_18.png" alt="Explicacion Algoritmo DES">
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

#### Programas FTP:

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