import React, { Component } from 'react';
import PropTypes from 'prop-types';

function FunctionButtons(props) {
    return (
        <React.Fragment>
            <button className="btn-function btn-multiply" onClick={() => props.func('*')}>&#xD7;</button>
            <button className="btn-function btn-divide" onClick={() => props.func('/')}>&#247;</button>
            <button className="btn-function btn-minus" onClick={() => props.func('-')}>-</button>
            <button className="btn-function btn-plus" onClick={() => props.func('+')}>+</button>
            <button className="btn-function btn-equals" onClick={() => props.func('=')}>=</button>
        </React.Fragment>
    );
}

FunctionButtons.propTypes = {
    func: PropTypes.func
};

export default FunctionButtons;