import React from 'react';
import '../style/mainPage.css';
import Header from './header';
import Table from './table';
import Info from './info';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    renderTableData() {
        return this.props.tableData.map((item) => {
            return (
                <tr className="table-row">
                    <td>{item.nazivDokumenta}</td>
                    <td>{item.broj}</td>
                    <td>{item.status}</td>
                    <td>{item.autor}</td>
                    <td>{item.tip}</td>
                    <td>{item.datum}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header = Object.keys(this.props.tableData[0])
        return header.map((key, index) => {
            return <th key={index}>{key.charAt(0).toUpperCase() + key.substr(1)}</th>
        })
    }

    render() {
        return (
            <div className="mainPage">
                <Header text="New folder1" />
                <Info name="New Folder 1" section="Lorem ipsum" date="24.5.2020" author="Marko Markovic" />
                <Table>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                </Table>
            </div>
        );
    }
}