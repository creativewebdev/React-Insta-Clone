import React, { Component } from 'react';
import styled from 'styled-components'

const Div = styled.div`
 
  color: black;
  font-size: 1em;
  width: 100vw;
  border-radius: 3px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

  const Button = styled.button`
  display: inline-block;
  color: black;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 3px;
  
`;

const Input = styled.input`
margin: 0 10px;
border-radius: 3px;
border: 1px solid black;
`

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            username: '',
            password: '',
            
            
        }

    }
        
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };

      
    
    render(){
        return(
            <Div>
            <Div>
            <form onSubmit={this.props.handleLogin}>
                   
                    <h2>Welcome To Instaclone</h2>
                    <p>Please Login to Continue</p>
                    <Input type='text'
                           name='username'
                           placeholer='Username'
                            value={this.state.username}
                            onChange={this.handleChange}
                    />
                    <Input 
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleChange}
                    />
                    
                    <Button> Log In </Button>
                </form>
                
            </Div>
            </Div>
        )
    }
}

export default Login