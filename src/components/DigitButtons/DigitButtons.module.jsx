import React, { Component } from 'react';

class DigitButtons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let digits = [
            7, 8, 9,
            4, 5, 6,
            1, 2, 3
        ];

        return (<div className="wrapper-digits">
            {digits.map((index) => (
                <button className="btn-key" key={index} onClick={(digit) => this.props.func(index)}>{index}</button>
            ))}
        </div>);
    }
}

export default DigitButtons;