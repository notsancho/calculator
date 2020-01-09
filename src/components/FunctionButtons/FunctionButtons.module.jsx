import React, { Component } from 'react';

class FunctionButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <button className="btn-function btn-divide" onClick={() => this.props.func('/')}>&#247;</button>
                <button className="btn-function btn-minus" onClick={() => this.props.func('-')}>-</button>
                <button className="btn-function btn-plus" onClick={() => this.props.func('+')}>+</button>
                <button className="btn-function btn-equals" onClick={() => this.props.func('=')}>=</button>
            </React.Fragment>
        );
    }
}

export default FunctionButtons;