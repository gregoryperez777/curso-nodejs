const location = require('./location/location');
const weather = require('./weather/weather');

const argv = require('./config/yargs').argv;

// Esto se hace para escapar la URL 
// y asegurarnos de transformar los caracteres especiales
// en caracteres seguros

console.log(argv.address);
// location.getLocationLatLng(argv.address)
//     .then(console.log)
//     .catch(console.log);

// weather.getWeather('-22.910000', '-43.200001')
//     .then(console.log)
//     .catch(console.log);

const getInfo = async address => {
    const coordinates = await location.getLocationLatLng(address)
        .catch(err => console.log('Error', err));

    const temperature = weather.getWeather(coordinates.lat, coordinates.lon)
        .catch(err => console.log('Error', err));
    
    return temperature;
}

getInfo(argv.address)
    .then(data => console.log(`El clima de ${argv.address} es de ${data}`))
    .catch(err => console.log(`No se pudo determinar el clima de${argv.address}`))