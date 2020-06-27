import React, { Component } from 'react';
import './index.css';
import styles from './index.module.css';


const testBigImg = require('@source/img/test-big.jpg');
const testJson = require('../../source/json/test.json');
const testSmallImg = require('../../source/img/test-small.png');

console.log(testJson);
console.log(testBigImg);
console.log(testSmallImg);


class TestCom extends Component {
  constructor(props) {
    super(props);
  }

  // source getDerivedStateFromProps(newProps, Laststate){
  /**
         * invoked right before calling the render method,
         * both on the initial mount and on subsequent updates.
         * It should return an object to update the state,
         * or null to update nothing.
         */
  // 需要返回obj作为state更新
  // }
  componentDidMount() {

  }

  // shouldComponentUpdate(nextProps, nextState){
  // 不需要此周期函数不要加入，否则可能引起不刷新！
  // }
  getSnapshotBeforeUpdate(prevProps, prevState) {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  componentWillUnmount() {
    /**
         * Perform any necessary cleanup in this method,
         * such as invalidating timers, canceling network requests,
         * or cleaning up any subscriptions that were created in
         * componentDidMount().
         */

  }

  render() {
    return (
      <div>
        <p id="test-p" className={styles.test}>测试：字体包引用、CSS autoprefixer自动添加前缀</p>
        <p>大图使用路径</p>
        <img src={testBigImg} />
        <p>小图base64编码</p>
        <img src={testSmallImg} />
      </div>
    );
  }
}

export default TestCom;
