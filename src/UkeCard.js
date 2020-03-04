import React, { Component } from 'react';
import ResetButton from './ResetButton.js';

class UkeCard extends Component {
    render() {
        return(
            <div>
                <h1 className="description-title">Title</h1>
                <h3 className="description-subtitle">Subtitle</h3>
                <p className="description">description here...</p>
                <ResetButton reset={this.props.reset}/>
            </div>
        )
    }
}

export default UkeCard;