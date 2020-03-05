import React, { Component } from 'react';
import Button from "@material-ui/core/Button";

class ResetButton extends Component {
    render() {
        const buttonStyle = {
            color: "white",
            border: "1px solid white",
            margin: "1em"
        }
        return(
            <div>
                <Button onClick={this.props.reset} variant="outlined" color="primary" style={buttonStyle}>
                    Reset
                </Button>
            </div>
        )
    }
}

export default ResetButton;