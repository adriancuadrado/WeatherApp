// Importamos también Component
import React, { Component } from 'react';

// Importamos el Functional Component
import WeatherLocation from './components/WeatherLocation';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherLocation></WeatherLocation>
    </div>
  );
}

export default App;
