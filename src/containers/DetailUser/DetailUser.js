import React, {Component} from "react";
import "./style.css";
import "./../../skin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default class DetailUser extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container bg-c1">
                <div className="box-user">
                    <span className="user-close">
                        <FontAwesomeIcon 
                            icon={faTimes}
                            size='2x'
                            />
                    </span>
                    <div className="user-photo bg-c6"></div>
                    <div className="user-atribute">
                        <h5>Budi</h5>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className="box-menu">
                    {/* kanan dan kiri 2 menu */}
                    <ul className="menu-wrap">
                        <li className="menu">
                            <h5>Biodata</h5>
                            <div className="bottom-line"/>
                        </li>
                        <li className="menu">
                            <h5>Kepartaian</h5>
                            <div className="bottom-line"/>
                        </li>
                    </ul>
                </div>
                <div className="box-content">
                    <div>
                        <h6>Alamat</h6>
                        <p>Las Vegas, st.monaco no.666</p>
                    </div>
                    
                </div>
            </div>
        )
    }
}