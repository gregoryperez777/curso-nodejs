/* 
    Function sin sintaxis arrow
    
    function sumar(a, b) {
        return a + b;
    }
*/

/*
    Function con sintaxis arrow
    
    let sumar = (a, b) => {
        return a + b;
    }
*/

// optimizando
let sumar = (a,b) => a + b;

console.log(sumar(20, 20));

/* exercise */

// Function sin sintaxis arrow
/*
    function greet() {
        return 'Hola Mundo';
    }
*/

// Function con sintaxis arrow
// let greet = () => 'Hola Mundo';

//console.log(greet());

// Arrow Function one parameter
// Al tener un solo parametro podemos precindir de los 
// parentesis de la function Arrow
// let greetTo = name => `Hola ${name}`;


let deadpool = {
    name: 'Wade',
    lastName: 'Winston',
    power: 'Regeneración',
    getNombre() {
        return `${this.name} ${this.lastName} ${this.power}`;
    }
};

/*
    Nota 1: this apunta a lo que esta inmediatamente fuera de la
    función

    Nota 2: En node no exite el objecto window sino global

    Nota 3: El scope del this con arrow function es diferente
    al de una funcion normal 
*/

console.log(deadpool.getNombre());