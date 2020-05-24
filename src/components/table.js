import React from 'react';
import '../style/table.css';


export default class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="table">
              <table className="table-wrapper">
               <tbody>
                  {this.props.children}
               </tbody>
            </table>
            </div>
        );


    }
}