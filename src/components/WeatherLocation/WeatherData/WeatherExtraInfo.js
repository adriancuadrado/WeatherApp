import React from 'react';
import PropTypes from 'prop-types'
import './styles.css'

// Dentro de los span colocamos literales con comillas invertidas: `` 
// Y hacemos destructuring en la entrada de la función flecha
const WeatherExtraInfo = ({ humidity, wind }) => (
    <div className="weatherExtraInfoCont">
        <span>{`${humidity} % - `}</span>
        <span>{`${wind} wind`}</span>
    </div>
)

// Si empezamos a escribir ptnr y le damos a TAB se pondrá:
// PropTypes.number.isRequired,
WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WeatherExtraInfo;