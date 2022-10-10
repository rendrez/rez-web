import React from "react";
import cat from "./cat.svg"
import "./Home.css"

class Home extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return (
        <div className="text-light text-center position-absolute top-50 start-50 translate-middle home">
            <img src={cat} alt="" className="cat" />
            <h1>Muhammad Randy</h1>
            <p>Someone who passionate about web development.</p>
        </div>
        );
    }
}

export default Home;