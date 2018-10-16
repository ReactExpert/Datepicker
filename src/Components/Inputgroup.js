import React, {Component} from 'react';
import './Inputgroup.css';


class Inputgroup extends Component {
    render (){
        return(
            <div className="Inputgroup">
                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">date</span>
                    <input type="text" className="form-control" placeholder="null" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">format</span>
                    <input type="text" className="form-control" placeholder="mm/dd/yyyy" aria-describedby="basic-addon2" />
                </div>


                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">startDate</span>
                    <input type="text" className="form-control" placeholder="null" id="basic-url" aria-describedby="basic-addon3" />
                </div>

                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">endDate</span>
                    <input type="text" className="form-control" placeholder="null" aria-label="Amount (to the nearest dollar)" />
                    
                </div>

                <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">language</span>
                    <input type="text" className="form-control" placeholder="en-US" aria-label="Amount (to the nearest dollar)" />
                </div>
            </div>
        );
    }
}

export default Inputgroup;