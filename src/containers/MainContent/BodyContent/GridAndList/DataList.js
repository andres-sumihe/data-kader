import React, {Component} from 'react';
import "./../../../../grid.css";
import './style.css';

export default class DataList extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="column-s-12 container-flex f-row bordered-s padd">
                <h5 className='column-4'>{this.props.name}</h5>
                <h6 className='column-3'>{this.props.kta}</h6>
                <h6 className='column-3'>{this.props.jabatan}</h6>
                <h6 className='column-3'>{this.props.wilayah}</h6>
            </div>
        )
    }
}