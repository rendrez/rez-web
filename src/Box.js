import React from "react";
import Navbar from './Navbar';
import './Box.css';
import Home from "./Home";

class Box extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    
    render() {
        return (
            <div className="box position-absolute top-50 start-50 translate-middle">
                <Navbar />
                <Home />
            </div>
        )
    }
}

export default Box;