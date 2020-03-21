import React, {Component} from 'react';
import "./../../../../grid.css";
import './style.css';


export default class DataGrid extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="column-l-3 column-m-12 bg-color container-flex f-column rounded-s ">
                <div className="rounded-fl bg-color-grey grid-box img-sz img-sz-s">
                    <image></image>
                </div>
                <div className="gridName">
                    <h5>{this.props.name}</h5>
                </div>
                <div className='desc'>
                    <p>{this.props.kta}</p>
                    <p>{this.props.jabatan}</p>
                    <p>{this.props.wilayah}</p>
                </div>
            </div>
        )
    }
}