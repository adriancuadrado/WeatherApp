import React from 'react';
import WeatherTemperature from './WeatherTemperature'
import WeatherExtraInfo from './WeatherExtraInfo';

// Vamos a importar las constantes
// En el from debemos subir un nivel con ../
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weathers' ;
import './styles.css'


// Ahora en weatherState ponemos directamente el nombre de la constante
const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature
            temperature={20}
            weatherState={RAIN} />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
);

export default WeatherData;