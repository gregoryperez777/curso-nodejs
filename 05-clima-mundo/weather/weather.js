const axios = require('axios');

const getWeather = async (lat, lon) => {
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=35a04942a6724893a1f994cdb1cf5ffd&units=metric`)
        .catch(e => console.log('ERROOOOOOOOOOOOOOOOOOR', e));

    return res.data.main.temp;
}

module.exports = {
    getWeather,
};