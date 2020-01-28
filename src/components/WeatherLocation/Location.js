import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({ city }) => {

    return (
        // Y lo meto dentro del JSX, dentro de llames...
        <div className="locationCont">
            <h1>{city}</h1>
        </div>
    )
};

// ATENCIÓN! El primer propTypes es con la "p" minuscula
// El PropTupes (importado) si va con la "P" mayñuscula
Location.propTypes = {
    city: PropTypes.string.isRequired,
}

export default Location;