import React, {Component} from "react";
import "./style.css";
import "./../../grid.css";
import "./../../skin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Bio extends Component{
    
    render(){
        return(
            
            <div className="box-content row">
                <div className="box-item column-6 ">
                <fieldset className=" bg-c5">
                    <legend className="label">Address</legend>
                    <span>Las Vegas, st.monaco no.666</span>
                </fieldset>
                </div>
                <div className="box-item column-6 ">
                <fieldset className=" bg-c5">
                    <legend className="label">Contacts</legend>
                    <div><span>0867699654321</span></div>
                </fieldset>
                </div>
                <div className="box-item column-6 ">
                <fieldset className=" bg-c5">
                    <legend className="label">Educations</legend>
                    <div><span>0867699654321</span></div>
                </fieldset>
                </div>
                <div className="box-item column-6 ">
                <fieldset className=" bg-c5">
                    <legend className="label">Jobs</legend>
                    <div><span>0867699654321</span></div>
                </fieldset>
                </div>
                <div className="box-item column-6 ">
                <fieldset className=" bg-c5">
                    <legend className="label">Langage</legend>
                    <div><span>0867699654321</span></div>
                </fieldset>
                </div>
                <div className="box-item column-6 ">
                <fieldset className=" bg-c5">
                    <legend className="label">Organizations</legend>
                    <div><span>0867699654321</span></div>
                </fieldset>
                </div>
                <div className="box-item column-6 ">
                <fieldset className=" bg-c5">
                    <legend className="label">Talents</legend>
                    <div><span>0867699654321</span></div>
                </fieldset>
                </div>
            </div>
        )
    }
}

class Kepartaian extends Component{
    render(){
        return(
            
                <div className="box-content row">
                    <fieldset className="box-item column-6 bg-c5">
                        <legend className="label">Structures</legend>
                        <div><span>Las Vegas, st.monaco no.666</span></div>
                    </fieldset>
                    <fieldset className="box-item column-6 bg-c5">
                        <legend className="label">Departements</legend>
                        <span>0867699654321</span>
                    </fieldset>
                    <fieldset className="box-item column-6 bg-c5">
                        <legend className="label">AKP</legend>
                        <span>Singapore International University</span>
                    </fieldset>
                    <fieldset className="box-item column-6 bg-c5">
                        <legend className="label">Committees</legend>
                        <span>IT konsultan</span>
                    </fieldset>
                    <fieldset className="box-item column-6 bg-c5">
                        <legend className="label">Partyschool</legend>
                        <span>Japan</span>
                    </fieldset>
                    <fieldset className="box-item column-6 bg-c5">
                        <legend className="label">Assignment</legend>
                        <span>Teman-teman bulu burung</span>
                    </fieldset>
                    <fieldset className="box-item column-6 bg-c5">
                        <legend className="label">Komunitas Juang</legend>
                        <span>Pintar</span>
                    </fieldset>
                </div>
        )
    }
}

export default class DetailUser extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="overlay">
                <span className="user-close">
                    <span className="close-icon">
                        <FontAwesomeIcon 
                            icon={faTimes}
                            size='2x'
                            />
                    </span>
                    
                </span>
                <div className="container bg-c1">
                    <div className="box-user">
                        
                        <div className="user-photo" style={{ backgroundImage: `url(${require("../../photos/photo1.jpg")})` }}/>
                        <div className="user-atribute">
                            <span className="Name tx-c4">BUDI TORTELINI UWAWWWW YAY</span>
                            <div className="NoKTA bg-c5">9922090922309201</div>
                            <div className="Jabatan tx-c6">Presiden</div>
                            <div className="Wilayah ">Kota Salatiga</div>
                        </div>
                    </div>
                    <div className="box-menu">
                        <ul className="menu-wrap">
                            <li className="menu active">
                                <span>Biodata</span>
                                <div className="bottom-line"/>
                            </li>
                            <li className="menu">
                                <span>Kepartaian</span>
                                <div className="bottom-line"/>
                            </li>
                        </ul>
                    </div>
                    <Bio/>
                </div>
            </div>
        )
    }
}