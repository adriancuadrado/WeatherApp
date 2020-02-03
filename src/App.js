import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';

const cities = [
    'Buenos Aires,ar',
    'Washington,us',
    'Bogota,col',
    'Ciudad de México,mx',
    'Madrid,es',
    'Lima,pe',
];

class App extends Component {

    handleSelectionLocation = city => {
        console.log("handleSelectionLocation");
    }

    render() {
        return (
            <div className="App">
                <LocationList cities={cities} onSelectedLocation={this.handleSelectionLocation}/>
            </div>
        );
    }
}

export default App;
