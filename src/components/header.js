import React from 'react';
import '../style/header.css';
import { RiSearchLine } from 'react-icons/ri';
import dino1 from '../images/dino1.jpg';




export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="document-title">{this.props.text}</div>
                <div className="search-bar">
                    <div className="searchbox">
                        <RiSearchLine />
                        <input type="text" placeholder="Pretraga" className="search"/>
                    </div>
                </div>
                <div className="profile-picture">
                    <img src={dino1} style={{height:"30px", width:"30px"}} />
                </div>
            </div>
        );


    }
}