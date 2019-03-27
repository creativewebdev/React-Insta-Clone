import React, { Component } from 'react';
import PostPage from './components/PostContainer/PostPage'
import LoginPage from './components/LoginPage/Login'
import loginAuth from './components/LoginAuth/LoginAuth'

class App extends Component {
    constructor() {
        super();
        this.state = {}

    }

    render(){
        return (

            <div>
               <ComponentLoginAuth />
            </div>
        )
        }
    }


const ComponentLoginAuth = loginAuth (PostPage)(LoginPage);
export default App