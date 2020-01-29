import React from 'react';
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css'


// Ahora en weatherState ponemos directamente el nombre de la constante
const WeatherData = ({ data: { temperature, weatherState, humidity, wind} }) => (
    <div className="weatherDataCont">
        <WeatherTemperature
            temperature={temperature}
            weatherState={weatherState} />
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>
);

export default WeatherData;