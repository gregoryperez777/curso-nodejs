let deadpool = {
    name: 'Wade',
    lastName: 'Winston',
    power: 'Regeneración',
    getNombre: function() {
        return `${this.name} ${this.lastName} ${this.power}`;
    }
};

// Sin destructuración //
// let name = deadpool.name;
// let lastName = deadpool.lastName;
// let power = deadpool.power;
// console.log('Sin destructuración', name, lastName, power);

// Con destructuración //
// let { name, lastName, power } = deadpool;
// console.log('Con destructuración:', name, lastName, power);

// Con destructuracion haciendo referencia a otro nombre de Variable

let { name: FirtsName, lastName, power } = deadpool;
console.log('Con destructuración:', FirtsName, lastName, power);