import React, { Component } from 'react';
import './App.css';

import TemplateCom from "./components/TemplateCom/index.jsx";


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
//不需要此周期函数不要加入，否则可能引起不刷新！
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

export default App;