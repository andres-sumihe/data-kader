import React, {Component} from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default class DetailUser extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container">
                <div className="box-user">
                    <span className="user-close">
                        <FontAwesomeIcon 
                            icon={faTimes}
                            size='2x'
                            />
                    </span>
                    <div className="user-photo"></div>
                    <div className="user-atribute">
                        <h5>Budi</h5>
                        <p>Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className="box-menu">
                    {/* kanan dan kiri 2 menu */}
                    <ul>
                        <li>
                            <div>
                                
                            </div>
                            <div/>
                        </li>
                        <li>
                            <div>

                            </div>
                            <div/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}