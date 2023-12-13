// Comentarios 
// alert('¡Hola Mundo, desde una alerta en JS!')

// Consola
// console.log('Hola, desde la consola');

// Declaración de una variable 
// var
// let
// let nombre = 'Heidy';

// Concatenación de texto y variable
// console.log('Me llamo: ', nombre);

// Las variables no pueden ser palabras reservadas
// Al nombrar las variables usaremos un nombre de ref. a los datos almacenados

// Constantes
// const pi = 3.141592;
// Tipado débil: no es necesario especificar el tipo de dato

// Tipos de datos 
// Numérico
// let edad = 22;
// Texto, cadena de texto (string)
// let saludo = 'Hola'
// Booleano: True/False
// let activo = true;

// Operadores aritméticos
// suma + 
// resta -
// multiplicación *
// división /
// Modulo o residuo %
// increnmento ++
// decremento --

// Operadores relacionales
// mayor y menor que < >
// mayor o igual >=
// menor o igual <=
// igual que ==
// Diferente de !=

// Operadores lógicos
// y &&
// or ||
// not !

// Reloj Digital
function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;

    let reloj = document.querySelector('#reloj');
    reloj.innerHTML = time;
}

setInterval(currentTime, 1000);
