const axios = require('axios');

const getLocationLatLng = async address => {
    // Esto se hace para escapar la URL 
    // y asegurarnos de transformar los caracteres especiales
    // en caracteres seguros
    const encodeUrl = encodeURI(address); 
    console.log(encodeUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'X-RapidAPI-Key': '88287d9494mshed6bc46031a19cfp166ab7jsn7af026503a25',
        }
    });
    
    const response = await instance.get()
        .catch(err => {
            console.log('ERROR!!!', err);   
        });

    if (response.data.Results.length === 0) {
        throw new Error(`No hay resultados ${address}`);
    }

    const data = response.data.Results[0];
    const { name, lat, lon } = data;

    return {
        address: name,
        lat,
        lon,
    }
}

module.exports = {
    getLocationLatLng,
};