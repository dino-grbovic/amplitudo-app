import React from 'react';
import '../style/organizer.css';
import { AiFillFolder, AiFillFolderOpen } from 'react-icons/ai';


export default class Organizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            hover: false
        }
    }

    handleToggle = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }

    toggleHover = () => {
        this.setState({ hover: !this.state.hover })
    }

    render() {
        return (
            <div className="organizer-wrapper">
                <div className="organizer">
                    <div className="folder-label"
                        onClick={this.handleToggle}
                        onMouseEnter={this.toggleHover}
                        onMouseLeave={this.toggleHover}
                    >
                        {
                            this.state.isOpen ?
                                <AiFillFolderOpen style={{ color: '#2196f3', fontSize: '25px' }} /> :
                                <AiFillFolder style={{ color: '#2196f3', fontSize: '25px' }} />
                        }
                        <span>{this.props.name}</span>
                        {this.state.hover &&
                            <div className="hoverMenu"
                                onClick={() => {
                                    if (this.props.handleClick) {
                                        this.props.handleClick();
                                    }
                                }}>
                                Kreiraj podfolder
                    </div>}
                    </div>
                    {
                        this.state.isOpen ? <div>{this.props.children}</div> : null
                    }
                </div>
            </div>
        );
    }
}
