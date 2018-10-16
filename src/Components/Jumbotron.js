import React, {Component} from 'react';
import './Jumbotron.css';
import Credit from '../img/Credit.png';

class Jumbotron extends Component {
    render () {
        return (
            <div className="jumbotron">
                <div className="container">
                    <h1 className="display-3">Datepicker v1.0.0</h1>
                    <p>A simple React.js datepicker App.</p>
                    <div className="carbonads">
                        <img src={Credit} alt="image" style={{width: '130px', height: '100px'}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron;