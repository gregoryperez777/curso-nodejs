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

// Funciones sin usar Async
// const getEmpleado = (id) => {
// 	return new Promise((resolve, reject) => {
// 		const employeeDB = employees.find(employee => employee.id === id);
// 		if (!employeeDB) return reject(`Empleado con id ${id} no existe`);
// 		return resolve(employeeDB);
// 	});
// };

// const getSalary = (employee) => {
// 	return new Promise((resolve, reject) => {
// 		const salaryDB = salaries.find(salary => salary.id === employee.id);
// 		if (!salaryDB) return reject(`El empleado con id ${employee.id} no tiene sueldo`);
// 		return resolve({
// 			name: employee.name,
// 			salary: salaryDB.salary,
// 			id: employee.id,
// 		});
// 	});
// };

// Funciones usando Async

const getEmpleado = async (id) => {
		const employeeDB = employees.find(employee => employee.id === id);
		if (!employeeDB) throw new Error(`Empleado con id ${id} no existe`);
		return employeeDB;
};

const getSalary = async (employee) => {
	const salaryDB = salaries.find(salary => salary.id === employee.id);
	if (!salaryDB) throw new Error(`El empleado con id ${employee.id} no tiene sueldo`);
	return ({
		name: employee.name,
		salary: salaryDB.salary,
		id: employee.id,
	});
};

const getInformation = async (id) => {
	const employee = await getEmpleado(id);
	const resp = await getSalary(employee);

	return `${resp.name} tiene un salario de ${resp.salary}`;
}

getInformation(4)
	.then((response) => {
		console.log(response);
	})
	.catch(err => {
		console.log(err);
	});