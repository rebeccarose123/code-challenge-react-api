import React, { Component } from 'react';
import './styles/App.css';
import './styles/userList.css';
import Header from './components/Header';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header appName="SuperDate"/>
                <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <div className="userList">
                    <div className="user">
                        <div className="picture">
                            <img src="https://randomuser.me/api/portraits/women/95.jpg" alt="Joy Noel"/>
                        </div>
                        <div className="info">
                            <div className="name">
                                <span>Mr </span>
                                <span>Bob </span>
                                <span>Sanchez </span>
                            </div>
                            <div className="email">
                                <span>joy.noel@example.com</span>
                            </div>
                            <div className="phone">
                                <span>(576)-670-5855</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
