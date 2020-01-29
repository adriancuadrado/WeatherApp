import React from 'react';
import WeatherIcons from 'react-weathericons'

// Importamos el PropType
import propTypes from 'prop-types'

// Hacemos la importación como en WeatherData
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weathers'
import './styles.css'

// Y actualizamos el diccionario:
const icons = {
    [CLOUD]: "cloud",
    [CLOUDY]: "cloudy",
    [SUN]: "day-sunny",
    [RAIN]: "rain",
    [SNOW]: "snow",
    [WINDY]: "windy",
}

const geWeatherIcon = weatherState => {
    const icon = icons[weatherState];

    const sizeIcon = "4x";

    if (icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeIcon} />       // Devuelvo el icono
    else
        return <WeatherIcons className="wicon" name={"day-sunny"} size={sizeIcon} />
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperatureCont">
        {
            geWeatherIcon(weatherState)
        }
        <span className="temperature">{`${temperature}`}</span>
        <span className="temperatureType">{`Cº`}</span>
    </div>
);


// Después del control (const) y antes de exportarlo le aplicamos el tipado
WeatherTemperature.propTypes = {
    // Dentro aplicamos una validación para ambas propiedades (Temperatura y Estado)
    // Si queremos que el parámetro sea obligatorio, ponemos isRequired
    temperature: propTypes.number,
    weatherState: propTypes.string.isRequired,
};

//WeatherTemperature.propTypes = 
export default WeatherTemperature;  