const employees = [{
    name: 'Carmen',
    id: 1,
},
{
    name: 'Gregory',
    id: 2,
},
{
    name: 'Marlene',
    id: 3,
}];

const salaries = [{
    id: 1,
    salary: 1000,
},
{
    id: 2,
    salary: 2000,
}];

const getEmpleado = (id) => {
    
    return new Promise((resolve, reject) => {
        const employeeDB = employees.find(employee => employee.id === id);
        if (!employeeDB) return reject(`Empleado con id ${id} no existe`);
        return resolve(employeeDB);
    });
};

const getSalary = (employee) => {
    return new Promise((resolve, reject) => {
        const salaryDB = salaries.find(salary => salary.id === employee.id);
        if (!salaryDB) return reject(`El empleado con id ${employee.id} no tiene sueldo`);
        return resolve({
            name: employee.name,
            salary: salaryDB.salary,
            id: employee.id,
        });
    });
};


// aca se puede apreciar el problema de la indentacion a la derecha
// getEmpleado(10)
//     .then(employee => {
//         // console.log('empleado de la DB',empleado);
//         getSalary(employee)
//             .then(salaryDb => {
//                 console.log(salaryDb);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     })
//     .catch(err => {
//         console.log('error', err);
//     });


// Promesas en cadena
// donde dentro de los then retornamos una nueva promesa 
// cuyo resultado puede ser captado dentro del siguiente
// then

// Nota importante solo necesitamos un catch al final para 
// manejar los errores que puedan presentar las promesas
getEmpleado(1)
    .then(employee => getSalary(employee))
    .then(salary => console.log(salary))
    .catch(err => {
        console.log(err) 
    });