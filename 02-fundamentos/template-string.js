let name = 'Deadpool';
let real = 'Wade Winston';

// console.log('nombre:', name + ' ' + real);
// console.log(`nombre: ${name} ${real}`);

// let fullName = name + ' ' + real;
// let templateName = `${name} ${real}`;

// console.log(fullName === templateName);

function getName() {
    return `${name} ${real}`;
}

console.log(`El nombre de: ${getName()}`);
