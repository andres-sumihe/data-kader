import React, {Component} from 'react';
import "./../../../../grid.css";
import './../style.css';

export default class DataGridList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    GridDataView = () => {
        return(
            <div className="column-l-3 column-m-12 bg-color container-flex f-column rounded-s ">
                <div className="rounded-fl bg-color-grey grid-box img-sz img-sz-s">
                    <image></image>
                </div>
                <div>
                    <h3>Your Name</h3>
                </div>
                <div>
                    <p>description</p>
                </div>
            </div>
        )
    }

    ListDataView = () => {
        return(
            <div className="column-s-12 bg-color">
                
            </div>
        )
    }

    render(){
        return(
            <div className="column-s-12 bg-color container-flex f-row rounded-s">
                <div className="column-3">
                    <h3>Lorem Ipsum</h3>
                </div>
                <div className="column-8">
                    <p>Lorem Ipsum</p>
                </div>

            </div>
        )
    }
}