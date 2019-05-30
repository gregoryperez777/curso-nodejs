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

const getEmpleado = (id, callback) => {
    const employeeDB = employees.find(employee => employee.id === id);

    if (!employeeDB) return callback(`Empleado con id ${id} no existe`);

    return callback(null, employeeDB);
};

const getSalary = (employee, callback) => {
    const salaryDB = salaries.find(salary => salary.id === employee.id);

    if (!salaryDB) return callback(`El empleado con id ${employee.id} no tiene sueldo`);

    return callback(null, {
        name: employee.name,
        salary: salaryDB.salary,
        id: employee.id,
    });
};

getEmpleado(1, (err, employee) => {
    if (err) return console.log(err);

    getSalary(employee, (err, salary) => {
        if (err) return console.log(err);
        return console.log(salary);
    })
});