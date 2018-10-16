import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="container">
                        <Link className="navbar-brand" to="/">Datepicker</Link>

                        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">Doc <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Github</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">More</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Router>
        )
    }
}

export default Navbar;