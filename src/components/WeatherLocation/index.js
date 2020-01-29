import React, { Component } from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
} from '../../constants/weathers';

const location = "Buenos Aires,ar";
const api_key = "f99bbd9e4959b513e9bd0d7f7356b38d";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";

const api_weathher = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
};

class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data,
        }
    }

    getTemp = kelvin => {
        return Number(convert(kelvin).from("K").to("C").toFixed(2));
    }

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = this.getTemp(temp);

        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s`,
        }

        return data;
    }

    handleUpdateClick = () => {
        fetch(api_weathher).then(resolve => {

            return resolve.json();
        }).then(data => {

            const newWeather = this.getData(data);
            console.log(newWeather);
            debugger;
            this.setState({
                data: newWeather,
            });
        });
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }
}

// Exportamos la constante
export default WeatherLocation;