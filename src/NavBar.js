import React, { Component } from 'react';


const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#7fcd91",
    margin: "15% 0",
    padding: "35 10px",
    borderRadius: "5px"
}

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav style={navStyle}>
                    <h5>About</h5>
                    <h1>Uke Identifier</h1>
                    <h5>Support</h5>
                </nav>
            </div>
        )
    }
}


export default Navbar;