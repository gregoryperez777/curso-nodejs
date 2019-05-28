/*

con var podemos reinicializar una variable
independientemente de su scope 

ejemplo 

var name = 'hola';
var name = 'chao';

con let una variable no se puede reinicializar se puede 
cambiar su valor pero no reinicializar 


let name = 'hola'; esta mal porque la variable ya fue declarada
let name = 'chao'; 

ahora

let name = 'hola'; es correcto :D
name = 'chao';

*/

let name = 'wolverine';

if ( true ) {

    /*
        nota importante aun la variable dentro de este if
        es se llame igual que la de afuera su scope es local
        dentro de este if. Es decir apunta a direcciones de 
        memoria diferentes
        
        si se quiere hacer referencia a la varible externa 
        simplemente se coloca sin let 
    */

    let name = 'magneto';
} 

name = 'wolverine1';
name = 'wolverine2';
name = 'wolverine3';
name = 'wolverine4';

console.log(name);

let i = 'hola';

for ( let i = 0; i<= 5; i++) {
    console.log(`ì ${i}`);
}

console.log(i);