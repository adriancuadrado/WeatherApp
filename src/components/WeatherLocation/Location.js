import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ city }) => {

    return (
        // Y lo meto dentro del JSX, dentro de llames...
        <div>
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