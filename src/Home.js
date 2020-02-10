import React, { Component } from 'react';
import EraOne from './EraOne.js';
import EraTwo from './EraTwo.js';
import EraThree from './EraThree.js';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Button from "@material-ui/core/Button";
import Navbar from './NavBar.js';


const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#7fcd91",
    width: "300px",
    height: "400px",
    borderRadius: "9px",
    boxShadow: "6px 9px #4d4646"
}

const inputText = {
    marginTop: "20px",
    color: "#4d4646",
}

const formInput = {
    margin: "20px",
    width: "50%",
}

const formContainer = {
    margin: "20px"
}

const formButton = {
    boxShadow: "3px 5px #4d4646",
    marginTop: "5px"
}

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            stamp: false,
            barFrets: false,
            label: false,
            era: "",
            showForm: true
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.displayEra = this.displayEra.bind(this);
        this.resetForm = this.resetForm.bind(this);
        
    }

    handleInputChange(event) {

        console.log(event.target.name);
        let name = event.target.name;

        if(event.target.value === "true") {
            this.setState({
                [name]: true
            });
        } else if(event.target.value === "false") {
            this.setState({
                [name]: false
            });
        }
        
    }

    handleSubmit(event) {
        if(this.state.stamp && this.state.barFrets && this.state.label) { 
            this.setState({era: "era-one"});
            this.setState({showForm: false});
        } else if(this.state.stamp && this.state.label) {
            this.setState({era: "era-two"});
            this.setState({showForm: false});
        } else if(this.state.label) {
            this.setState({era: "era-three"});
            this.setState({showForm: false});
        }
        event.preventDefault();
    }

    displayEra() {
        if(this.state.era === "era-one") {
            return <EraOne reset={this.resetForm}/>
        } else if(this.state.era === "era-two") {
            return <EraTwo />
        } else if(this.state.era === "era-three") {
            return <EraThree />
        }
    }

    resetForm() {
        console.log("clicked reset");
        this.setState({
            stamp: false,
            barFrets: false,
            label: false,
            era: "",
            showForm: true
        });
    }
    

    render(){
        return(
            
            <div>
                <Navbar />
                <div className="form" style={formContainer}>
                    {this.state.showForm ? 
                        <form onSubmit={this.handleSubmit} style={formStyle}>
                                <InputLabel style={inputText} >Stamp Type</InputLabel>
                                <Select onChange={this.handleInputChange} name="stamp" style={formInput}>
                                    <MenuItem value="none">Select</MenuItem>
                                    <MenuItem value="true">Stamped</MenuItem>
                                    <MenuItem value="false">No Stamp</MenuItem>
                                </Select>
                                <InputLabel style={inputText} >Label Type</InputLabel>
                                <Select onChange={this.handleInputChange} name="label" style={formInput}>
                                    <MenuItem value="none">Select</MenuItem>
                                    <MenuItem value="true">Has Front Label</MenuItem>
                                    <MenuItem value="false">No Label</MenuItem>
                                </Select>
                                <InputLabel style={inputText} >Fret Type</InputLabel>
                                <Select onChange={this.handleInputChange} name="barFrets" style={formInput}>
                                    <MenuItem value="none">Select</MenuItem>
                                    <MenuItem value="true">Bar Frets</MenuItem>
                                    <MenuItem value="false">Regular Frets</MenuItem>
                                </Select>
                                <Button type="submit" variant="outlined" color="primary" style={formButton}>
                                    Submit
                                </Button>
                            {/* <input type="submit" value="submit"/> */}
                        </form>
                        :
                        this.displayEra()  
                    }
                </div>
                
                
            </div>
        )
    }
}


export default Home;