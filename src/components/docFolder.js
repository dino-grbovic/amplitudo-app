import React from 'react';
import '../style/docFolder.css';
import { Redirect } from 'react-router-dom';
import { AiFillFolder } from 'react-icons/ai';



export default class DocFolder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (

      <div className="docFolder" onClick={() => { this.setState({ redirect: '/mainPage' }) }}>
        {
          !!this.state.redirect && <Redirect to={this.state.redirect} />
        }
        <AiFillFolder style={{ color: '#2196f3', fontSize: '25px' }} />
        <span>{this.props.name}</span>
      </div>
    );


  }
}
