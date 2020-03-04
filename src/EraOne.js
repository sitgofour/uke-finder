import React, { Component } from 'react';
import UkeCard from './UkeCard.js';

class EraOne extends Component {
    render() {
        return (
            <div className="Era">
                <UkeCard reset={this.props.reset}/>
                <h3>{process.env.REACT_APP_EVAR}</h3>
            </div>
        )
    }
}

export default EraOne;