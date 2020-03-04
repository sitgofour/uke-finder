import React, { Component } from 'react';
import Button from "@material-ui/core/Button";

class ResetButton extends Component {
    render() {
        return(
            <div>
                <Button onClick={this.props.reset} variant="outlined" color="primary">
                    Reset
                </Button>
            </div>
        )
    }
}

export default ResetButton;