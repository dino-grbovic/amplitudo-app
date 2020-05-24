import React from 'react';
import '../style/tree.css';
import Organizer from './organizer';
import DocFolder from './docFolder';


export default class Tree extends React.Component {
    constructor(props) {
      super(props);      
    }
    
    render() {
      return (
        <div className="Tree">
          {this.props.children}
        </div>
      );     
    }
  }