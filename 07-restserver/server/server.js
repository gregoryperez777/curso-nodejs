const express = require('express');
const bodyParser = require('body-parser');
const app = express();

require('./config/config');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/usuario', function (req, res) {
	res.json('get Usuario');
});

app.post('/usuario', function (req, res) {
	
	const { nombre, edad } = req.body;
	
	if (nombre === undefined) {
		res.status(400).json({
			ok: false,
			mensaje: 'nombre es requerido',
		});	
	} else {
		res.json({
			nombre,
			edad,
		});
	}
	
});

app.put('/usuario/:id', function (req, res) {
	const { id } = req.params;
	res.json({
		id,
	});
});

app.delete('/usuario', function (req, res) {
	res.json('delete Usuario');
});
 
app.listen(process.env.PORT, () => {
	console.log(`escuchando por el puerto ${process.env.PORT}`);
});