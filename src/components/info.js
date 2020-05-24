import React from 'react';
import '../style/info.css';




export default class Info extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info">
                <div className="folder-info">
                    <span>Naziv Foldera: <span className="item">{this.props.name}</span></span>
                    <span>Sektor: <span className="item">{this.props.section}</span></span>
                    <span>Datum Kreiranja: <span className="item">{this.props.date}</span></span>
                    <span>Kreator: <span className="item">{this.props.author}</span></span>
                </div>
                <div className="description">
                    <div className="opis">Opis:</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                </div>

            </div>
        );
    }
}