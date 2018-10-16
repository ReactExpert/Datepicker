import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import './Content.css';

import Datepicker from './Datepicker';
import Inputgroup from './Inputgroup';
import Toggle from './Toggle';



class Content extends Component {
    render() {
        return(
            <div className="container">
            <h1>Overview</h1>
                <div className="row">
                    <div className="col-md-3">
                        <h2>Demo</h2>
                        <Datepicker />
                    </div>
                    <div className="col-md-3">
                        <h2>Options</h2>
                        <Inputgroup />
                    </div>
                    <div className="col-md-3">
                        <h2>Toggles</h2>
                        <Toggle />
                    </div>
                    <div className="col-md-3">
                        <h2>Methods</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <p><Link className="btn btn-secondary" to="/" role="button">View details »</Link></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Content;