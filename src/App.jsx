import { hot } from 'react-hot-loader/root'; // 热替换
import React, { Component } from 'react';
import './App.css';

import TemplateCom from './components/TestCom';
import TsTestCom from "./components/TsTestCom";
import PureTsCom from "./components/PureTsCom";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <TemplateCom />
        <TsTestCom compiler="TypeScript" framework="React " />
        <PureTsCom />
      </div>
    );
  }
}

export default hot(App);
