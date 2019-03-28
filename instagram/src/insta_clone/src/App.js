import React, { Component } from 'react';
import PostPage from './components/PostContainer/PostPage'
import LoginPage from './components/LoginPage/Login'
import loginAuth from './components/LoginAuth/LoginAuth'
import styled from 'styled-components'

const StyledApp = styled.div`
  width: 100%;
  margin:0;
  padding:0;
  height: auto;
  font-size: 20px;
`;


class App extends Component {
    constructor() {
        super();
        this.state = {}

    }

    render(){
        return (

            <StyledApp>
               <ComponentLoginAuth />
            </StyledApp>
        )
        }
    }


const ComponentLoginAuth = loginAuth (PostPage)(LoginPage);
export default App