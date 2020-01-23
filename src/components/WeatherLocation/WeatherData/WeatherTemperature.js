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
    const icon = icons[weatherState]
    if (icon)
        return <WeatherIcons name={icon} size="2x" />       // Devuelvo el icono
    else
        return <WeatherIcons name={"day-sunny"} size="2x" />
}

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div>
        {
            geWeatherIcon(weatherState)
        }
        <span>{`${temperature} ºC `}</span>
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