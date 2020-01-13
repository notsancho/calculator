import React, { Component } from 'react';
import PropTypes from 'prop-types';

function DigitButtons(props) {
    const digits = [
        7, 8, 9,
        4, 5, 6,
        1, 2, 3,
        '', 0, ''
    ];

    return (
        <div className="wrapper-digits">
            {digits.map((index, key) => (
                <button className="btn-key" key={key} onClick={(digit) => props.func(index)} disabled={!Number.isInteger(index)}>{index}</button>
            ))}
        </div>
    );
}

DigitButtons.propTypes = {
    func: PropTypes.func
};

export default DigitButtons;