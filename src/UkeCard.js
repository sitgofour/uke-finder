import React, { Component } from 'react';

class UkeCard extends Component {
    render() {
        const ukeCardStyle = {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minWidth: "400px",
            minHeight: "500px",
            backgroundColor: "#7fcd91",
            borderRadius: "1em",
            boxShadow: "8px 8px 8px 8px #141a15"
        }
        const imgStyle = {
            maxWidth: "300px"
        }
        const descStyle = {
            maxWidth: "500px",
            padding: "1em 2em"
        }
        return(
            <div style={ukeCardStyle}>
                <h1 className="description-title">{this.props.title}</h1>
                <img src={this.props.imgSrc} style={imgStyle} alt="uke"/>
                <h3 className="description-subtitle">{this.props.subtitle}</h3>
                <p className="description" style={descStyle}>{this.props.desc}</p>
            </div>
        )
    }
}

export default UkeCard;