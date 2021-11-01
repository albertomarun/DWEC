# Practica 3
# Índice:
- [Practica 3](#practica-3)
- [Índice:](#índice)
  - [TypeScript. Historia, curiosidades, características principales. Similitudes con JavaScript.](#typescript-historia-curiosidades-características-principales-similitudes-con-javascript)
    - [Historia.](#historia)
    - [Curiosidades.](#curiosidades)
    - [Características Principales.](#características-principales)
    - [Similitudes con JavaScript.<sup>5</sup>](#similitudes-con-javascriptsup5sup)
  - [¿Qué son React, Angular y Vue.js?](#qué-son-react-angular-y-vuejs)
    - [React](#react)
    - [Angular](#angular)
    - [Vue.js](#vuejs)
  - [React. Historia, curiosidades, características principales.](#react-historia-curiosidades-características-principales)
    - [Historia](#historia-1)
    - [Curiosidades](#curiosidades-1)
    - [Características Principales.](#características-principales-1)
  - [Angular. Historia, curiosidades, características principales.](#angular-historia-curiosidades-características-principales)
    - [Historia](#historia-2)
    - [Curiosidades](#curiosidades-2)
    - [Características Principales.](#características-principales-2)
  - [Vue.js. Historia, curiosidades, características principales.](#vuejs-historia-curiosidades-características-principales)
    - [Historia](#historia-3)
    - [Curiosidades](#curiosidades-3)
    - [Características Principales.](#características-principales-3)
- [Referencias](#referencias)
<br>

***
## TypeScript. Historia, curiosidades, características principales. Similitudes con JavaScript.
TypeScript se define como un superconjunto de JavaScript que añade tipados estáticos y objetos basados en clases.<sup>1</sup>

### Historia.
Apareció con su versión 0.8 en Octubre 2012, después que se desarrollo durante 2 años por Microsoft.
Su versión 0.9 fue lanzada un año luego.

La versión 1.0 de TypeScript se lanzo en el 2014 durante la conferencia Build (Conferencia Desarrollada por Microsoft).

En 2016 se lanzó la versión 2.0 de TypeScript, agregando nuevas características, como lo fue la capacidad de hacer que a una variable no se le asigne el valor nulo.<sup>2</sup>
<br>

### Curiosidades.
* Es desarrollado y mantenido por Microsoft.
* Extiende la sintaxis de JavaScript.
* Cualquier código existente en JavaScript funciona en TypeScript.
* Se puede configurar lo estricto de manera gradual.
* Posee inferencia de tipos.
* Solo se puede usar JSX en archivos con extesion .tsx
* Las funciones que no devuelven nada, en realidad devuelven null.
* Es fácil usar bibliotecas de JavaScript.
* El compilador se puede aprovechar como un sistema de construcción ligero.<sup>3</sup>
<br>

### Características Principales.
* Esta bastante respaldado por sus desarrolladores (Microsoft y Google).
* Es un lenguaje compilado.
* Es un programa orientado a objetos.
* Las anotaciones tienen gran importancia al diseñar potentes frameworks.
* Soporta Genéricos.
* Permite el desarrollo de código para el lado del servidor (Node.js).
* Tiene alta flexibilidad.<sup>4</sup>
<br>

### Similitudes con JavaScript.<sup>5</sup>
|JavaScript|TypeScript|
|--|---|
|No existe el Tipado Estático. Las variables pueden cambiar su tipo en cualquier momento.|Lenguaje de Tipado Fuerte, debiéndose indicar en todos los casos el tipo de dato a manejar y se producen errores si se cambian.|
|No existen los tipos genéricos|Permite crear código reutilizable basado en tipos genéricos.|
|No es de tipo estructurado.|Permite crear estructuras en base a interfaces de modo que se pueda trabajar con una estructura de datos predefinida que no se salga de ciertos parámetros, y a la vez permite la flexibilidad de usar estructuras equivalentes con tipos diferentes.|
|Los tipos enumerados se pueden simular con clases sencillas.|Permite la definición de enumeraciones manteniendo su robustez al usarlas de modo que no se pueda salir de ellas.|
<br>

***
## ¿Qué son React, Angular y Vue.js?
### React
Es una biblioteca escrita en JS(JavaScript), desarrollada por Facebook con la intención de facilitar la creación de componentes interactivos, reutilizables y para UI(Interfaces de Usuario). <sup>6</sup>

### Angular
Es un framework de código abierto desarrollado por Google con la intención de facilitar la creación y aplicación de Web Apps de una sola página, mejor conocidas como webs SPA (Single Page Application).<sup>7</sup>

### Vue.js
Es un framework progresivo para construir UI(Interfaz de Usuario). Está diseñado desde cerro para ser usado de manera incremental. La librería principal esta enfocada en la capa de visualización, siendo fácil de usar e integrar con otras librerías o distintos proyectos ya existente.<sup>8</sup>

<br>

***
## React. Historia, curiosidades, características principales.
### Historia
Fue creado por Jordan Walke y el primer prototipo se llamo "FaxJS".
Fue influenciado por XHP de HTML (Una librería de componentes para PHP).
En el 2015 se anunció la creación de React Native.

### Curiosidades
* Fue creado por Jordan Walke (Ingeniero de Software de Facebook).
* Los componentes de Facebook están escritos en React.
* Toda la plataforma de Instagram está escrita en React.
* Su primer uso fue en el feed de noticias de Facebook y luego en Instagram.
* Se volvió código abierto en JSConf en Estados Unidos en Mayo del 2013.
* 

### Características Principales.
* Posee un Virtual DOM propio.
* Las propiedades pueden definirse como los atributos de configuración para un componente.
* El Estado de un componenete se define como una representación del mismo en un momento concreto, una instancia del propio componente.
* El ciclo de la vida es una serie de estados por los cuales pasan los componentes statefull a lo largo de su existencia.
* Usa una sintaxis parecida a HTML, llamada JSX. <sup>9</sup>

<br>

***
## Angular. Historia, curiosidades, características principales.
### Historia
La primera versión de Angular se comenzó a desarrollar en 2009 por Miško Hevery.
Se había creado como un servicio de almacenamiento de archivos JSON donde se cobraba por el peso en megabytes de los archivos.
La verisón más estable de Angular 1 fue la 1.5.8 frente a Angular 2 que la versión más estable es la 2.2
AngularJS 2 fue anunciado en la ng-Europe conference 2014, causando un revuelo entre los desarrolladores ya que fue rediseñado por completo, trayendo bastantes mejoras.

Al publicarse Angular 2, era necesario sí o sí, cambiarse de Angular 1.x a Angular 2.x
El 14 de septiembre de 2016 fue lanzado la primera versión oficial estable de Angular 2.<sup>12</sup>

### Curiosidades
* Toda la documentación sobre Angular la puedes encontrar en angular.io
* Se reescribió por completo para la versión 2.0
* Framework Web-Frontend de Código Abierto creado por Google con una arquitectura Modelo-Vista-Controlador (MVC).
* Es ideal para crear una Single Page Application (SPA).
* El IDE más complementado para programar en Angular es Visual Studio Code.
* TypeScript es de los lenguajes más usados al programar en Angular.<sup>13</sup>

### Características Principales.
* El desarrollo de aplicaciones de escritorio es mucho más fácil cuando primero se manejan los problemas de rendimiento en desarrollo móvil.
* Al desarrollar una nueva funcionalidad se empaqueta en un módulo.
* Es compatible con todos los navegadores.
* Se recomienda el uso de TypeScript en Angular2.<sup>12</sup>

<br>

***
## Vue.js. Historia, curiosidades, características principales.
### Historia
Fue lanzada en Febrero de 2014, creado por Evan Yout después de haber trabajado en el desarrollo de Angular JS en Google.

Extrajo las partes que mas le gustaban de Angular JS y crear un Framework realmente liviano y potente.<sup>14</sup>

### Curiosidades
* Es un framework progresivo.
* Posee funcionalidades intuitivas, modernas, y fáciles de usar.
* Tiene un ecosistema que cubre todo.
* Posee una comunidad muy activa.
* __TODO__ el código de un componente se encuentra en un único fichero.<sup>15</sup>

### Características Principales.
* Su aprendizaje es fácil y poco complicado.
* Todo lo necesario para solucionar un problema en el desarrollo está bastante sencillo y bien documentado.
* Cuenta con una línea de comandos __Vue CLI__.
* Pesa alrededor de 20Kb, con un rendimiento fantástico, siendo uno de los frameworks más rápidos de la actualidad.<sup>14</sup>
<br><br>

***

# Referencias
1. [Simões, C. (2021, 6 julio). ¿Qué es TypeScript y por qué utilizarlo? ITDO Desarrollo web y APPs Barcelona. Recuperado 29 de octubre de 2021, de https://www.itdo.com/blog/que-es-typescript-y-por-que-utilizarlo/amp/](https://www.itdo.com/blog/que-es-typescript-y-por-que-utilizarlo/amp/)
2. [Colectiva, N. (2020, 5 abril). Que es TypeScript y otros Detalles. NubeColectiva. Recuperado 29 de octubre de 2021, de https://blog.nubecolectiva.com/que-es-typescript-y-otros-detalles/amp/](https://blog.nubecolectiva.com/que-es-typescript-y-otros-detalles/amp/)
3. [7 curiosidades útiles de TypeScript para principiantes. (2021, 17 febrero). ICHI.PRO. Recuperado 29 de octubre de 2021, de https://ichi.pro/es/7-curiosidades-utiles-de-typescript-para-principiantes-178123557284711](https://ichi.pro/es/7-curiosidades-utiles-de-typescript-para-principiantes-178123557284711)
4. [Caules, C. Á. (2019, 26 diciembre). 10 Características que me gustan de TypeScript. Arquitectura Java. Recuperado 29 de octubre de 2021, de https://www.arquitecturajava.com/10-cosas-que-me-gustan-de-typescript/](https://www.arquitecturajava.com/10-cosas-que-me-gustan-de-typescript/)
5. [J. (2020, 20 febrero). TypeScript contra JavaScript: ¿cuál deberías utilizar? campusMVP.es. Recuperado 29 de octubre de 2021, de https://www.campusmvp.es/recursos/post/typescript-contra-javascript-cual-deberias-utilizar.aspx](https://www.campusmvp.es/recursos/post/typescript-contra-javascript-cual-deberias-utilizar.aspx)
6. [Next U. (2017, 30 agosto). ¿QUÉ ES Y CÓMO FUNCIONA REACT.JS? NextU LATAM. Recuperado 29 de octubre de 2021, de https://www.nextu.com/blog/que-es-y-como-funciona-react-js/](https://www.nextu.com/blog/que-es-y-como-funciona-react-js/)
7. [Devs, Q. (2019, 17 septiembre). ¿Qué es Angular y para qué sirve? Quality Devs. Recuperado 29 de octubre de 2021, de https://www.qualitydevs.com/2019/09/16/que-es-angular-y-para-que-sirve/](https://www.qualitydevs.com/2019/09/16/que-es-angular-y-para-que-sirve/)
8. [Introducción a Vue.js. (s. f.). VueJS. Recuperado 29 de octubre de 2021, de https://es.vuejs.org/v2/guide/](https://es.vuejs.org/v2/guide/)
9. [React. (2021, 9 septiembre). En Wikipedia, la enciclopedia libre. https://es.wikipedia.org/wiki/React](https://es.wikipedia.org/wiki/React)
10. [Barreto, V. C. J. (2018, 26 mayo). Angular 2: historia, características y métodos de instalación. Medium. Recuperado 29 de octubre de 2021, de https://medium.com/@jc.valerio.b/angular-2-historia-caracter%C3%ADsticas-y-m%C3%A9todos-de-instalaci%C3%B3n-11492ea67e2b](https://medium.com/@jc.valerio.b/angular-2-historia-caracter%C3%ADsticas-y-m%C3%A9todos-de-instalaci%C3%B3n-11492ea67e2b)
11. [Pedroza, S. T. (2021, 3 junio). Curiosidades que no sabías sobre Angular. Codehouse. Recuperado 29 de octubre de 2021, de https://codehouse.academy/curiosidades-que-no-sabias-sobre-angular/](https://codehouse.academy/curiosidades-que-no-sabias-sobre-angular/)
12. [Barreto, V. C. J. (2018b, mayo 26). Angular 2: historia, características y métodos de instalación. Medium. Recuperado 29 de octubre de 2021, de https://medium.com/@jc.valerio.b/angular-2-historia-caracter%C3%ADsticas-y-m%C3%A9todos-de-instalaci%C3%B3n-11492ea67e2b](https://medium.com/@jc.valerio.b/angular-2-historia-caracter%C3%ADsticas-y-m%C3%A9todos-de-instalaci%C3%B3n-11492ea67e2b)
13. [Pedroza, S. T. (2021b, junio 3). Curiosidades que no sabías sobre Angular. Codehouse. Recuperado 29 de octubre de 2021, de https://codehouse.academy/curiosidades-que-no-sabias-sobre-angular/](https://codehouse.academy/curiosidades-que-no-sabias-sobre-angular/)
14. [Colectiva, N. (2021, 4 agosto). Que es Vue JS, Historia y otros detalles. Blog Nube Colectiva. Recuperado 29 de octubre de 2021, de https://blog.nubecolectiva.com/que-es-vue-js-historia-y-tu-primer-hola-mundo/](https://blog.nubecolectiva.com/que-es-vue-js-historia-y-tu-primer-hola-mundo/)
15. [Sánchez, J. A. D. (2018, 8 octubre). Por qué elegir VueJS: 5 razones para considerarlo nuestro próximo framework de referencia. Genbeta. Recuperado 29 de octubre de 2021, de https://www.genbeta.com/desarrollo/por-que-elegir-vuejs-5-razones-para-considerarlo-nuestro-proximo-framework-de-referencia](https://www.genbeta.com/desarrollo/por-que-elegir-vuejs-5-razones-para-considerarlo-nuestro-proximo-framework-de-referencia)

***
***

[Volver Arriba](#practica-3)

[Volver a la Página Principal](https://github.com/albertojmarun/DWEC)