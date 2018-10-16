import React, {Component} from 'react';
import './Toggle.css';


class Toggle extends Component {
    render (){
        return(
            <div className="Inputgroup">
                <div className="input-group">
                    <span class="input-group-addon-toggle">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                    </span>
                    <input type="text" className="form-control" placeholder="container" aria-describedby="basic-addon1" />
                </div>

                <div className="input-group">
                    <span class="input-group-addon-toggle">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                    </span>
                    <input type="text" className="form-control" placeholder="trigger" aria-describedby="basic-addon2" />
                </div>


                <div className="input-group">
                    <span class="input-group-addon-toggle">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                    </span>
                    <input type="text" className="form-control" placeholder="inline" id="basic-url" aria-describedby="basic-addon3" />
                </div>

                <div className="input-group">
                    <span class="input-group-addon-toggle">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                    </span>
                    <input type="text" className="form-control" placeholder="autoShow" aria-label="Amount (to the nearest dollar)" />
                    
                </div>

                <div className="input-group">
                    <span class="input-group-addon-toggle">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                    </span>
                    <input type="text" className="form-control" placeholder="autoHide" aria-label="Amount (to the nearest dollar)" />
                </div>
            </div>
        );
    }
}

export default Toggle;