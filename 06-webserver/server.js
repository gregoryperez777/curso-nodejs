const express = require('express');
const hbs = require('hbs');

require('./hbs/helpers');

const app = express()

app.use(express.static(__dirname + '/public'));


// express hbs
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home', {
        name: 'Gregory',
        // pasandolo como variable pero como es comun aqui y en about 
        // lo colocamos en un helper
        // year: new Date().getFullYear(),
    });
});

app.get('/about', function (req, res) {
    res.render('about' /*{
        year: new Date().getFullYear(),
    }*/);
});

app.get('/data', function (req, res) {
    res.send('Hello Data');   
})
 
app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000')
})