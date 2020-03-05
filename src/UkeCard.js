import React, { Component } from 'react';
import ResetButton from './ResetButton.js';

class UkeCard extends Component {
    render() {
        const ukeCardStyle = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: "400px",
            minHeight: "500px",
            backgroundColor: "#7fcd91",

        }
        const imgStyle = {
            maxWidth: "300px"
        }
        return(
            <div style={ukeCardStyle}>
                <h1 className="description-title">Title</h1>
                <img src={this.props.imgSrc} style={imgStyle} alt="uke"/>
                <h3 className="description-subtitle">Subtitle</h3>
                <p className="description">description here...</p>
                <ResetButton reset={this.props.reset}/>
            </div>
        )
    }
}

export default UkeCard;