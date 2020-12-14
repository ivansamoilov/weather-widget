
const _apiBase = `https://api.openweathermap.org/data/2.5/`;
const _apiKey = `&appid=50fb0af36e080f721ce75485613869d9`;
const _imgBase = `http://openweathermap.org/img/wn/`;


const _getResource = async (city, units) => {
    const res = await fetch(`${_apiBase}${city}${_apiKey}${units}`);
    if (!res.ok) {
        throw new Error(`Could not fetch ${city}` +
            `, received ${res.status}`)
    }
    return await res.json();
};

const _getImage = (icon, scale) => {
    return `${_imgBase}${icon}@${scale}x.png`;
};

const _transformCity = (city) =>{
    let main = {
        name:city.name,
        id: city.id,
        weather:city.main
    };
    return {
        main,
        city
    };
};

const getByCityName = async (cityName, units='metric') => {
    const city = await _getResource(`weather?q=${cityName}`, `&units=${units}`);
    return _transformCity(city);

};

const getByCityId = async (cityId, units='metric') => {
    const city = await _getResource(`weather?id=${cityId}`, `&units=${units}`);
    return _transformCity(city);
};

const getOneCallCity = async (cityId, units='metric') => {
    return await _getResource(`onecall?${cityId}`, `&units=${units}`);
};

export {
    getByCityName,
    getByCityId,
    getOneCallCity,
    _getImage
}