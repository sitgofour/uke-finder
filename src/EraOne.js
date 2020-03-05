import React, { Component } from 'react';
import UkeCard from './UkeCard.js';
import ukePhoto from './martinuke.jpg';

class EraOne extends Component {
    render() {
        const descOne = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

        return (
            <div className="Era">
                <UkeCard 
                    reset={this.props.reset} 
                    imgSrc={ukePhoto}
                    title="title 1"
                    subtitle="subtitle"
                    desc={descOne}
                    />
                <h3>{process.env.REACT_APP_EVAR}</h3>
            </div>
        )
    }
}

export default EraOne;