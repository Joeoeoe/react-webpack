import { hot } from 'react-hot-loader/root'; //热替换
import React, { Component } from 'react';
import './App.css';

import TemplateCom from "./components/TestCom";


class App extends Component {
    constructor(props) {
        super(props);
    }
    //static getDerivedStateFromProps(newProps, Laststate){
        /**
         * invoked right before calling the render method, 
         * both on the initial mount and on subsequent updates. 
         * It should return an object to update the state, 
         * or null to update nothing.
         */
         //需要返回obj作为state更新
    //}
    componentDidMount(){

    }
    //shouldComponentUpdate(nextProps, nextState){
    //定义了会返回undefined，不需要此周期函数不要加入周期之中
    //}
    getSnapshotBeforeUpdate(prevProps, prevState){

    }
    componentDidUpdate(prevProps, prevState, snapshot){

    }
    componentWillUnMount(){
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
                <TemplateCom />               
            </div>
        );
    }
}

export default hot(App);