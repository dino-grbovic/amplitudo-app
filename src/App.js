import React from 'react';
import './style/App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from './components/sidebar';
import MainPage from './components/mainPage';
import { data } from './data';
import { tableData } from './data';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Sidebar data={data} />
          <Switch>
            <Route exact path="/mainPage">
              <MainPage tableData={tableData} />
            </Route>
          </Switch>
        </Router>
      </div>
    );


  }
}


