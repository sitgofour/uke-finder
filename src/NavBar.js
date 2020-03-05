import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#7fcd91",
    margin: "15% 0",
    padding: "35 10px",
    borderRadius: "5px",
    boxShadow: "4px 4px 4px 4px #141a15"
}

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav style={navStyle}>
                    <Link to="/about">
                        <h5>About</h5>
                    </Link>
                    <Link to="/">
                        <h1>Uke Identifier</h1>
                    </Link>
                    <Link to="/support">
                        <h5>Support</h5>
                    </Link>
                </nav>
            </div>
        )
    }
}


export default Navbar;