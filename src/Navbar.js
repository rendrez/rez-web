import React from 'react';
import "./Navbar.css";

class Navbar extends React.Component {
    constructor(){
        super();
        this.state = {
            brand: 'Rez Web',
            navbar: ['Home', 'Project', 'About', 'Contact']
        }
    }

    render(){
        return(
            
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fw-bold">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{this.state.brand}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse position-absolute top-50 end-0 translate-middle-y" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-nav" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Project</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="about-me.html">About me</a>
                        </li>
                        <li className="nav-item contact">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}

export default Navbar;