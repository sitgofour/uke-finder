import React, { Component } from 'react';
import Button from "@material-ui/core/Button";

class EraOne extends Component {
    render() {
        return (
            <div className="Era">
                <h1 className="description-title">Title</h1>
                <h3 className="description-subtitle">Subtitle</h3>
                <p className="description">description here...</p>
                <Button onClick={this.props.reset} variant="outlined" color="primary">
                    Reset
                </Button>
                <h3>{process.env.REACT_APP_EVAR}</h3>
            </div>
        )
    }
}

export default EraOne