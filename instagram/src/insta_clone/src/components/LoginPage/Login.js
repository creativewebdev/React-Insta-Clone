import React, { Component } from 'react';

class Login extends Component {
    constructor(){
        super()


    }
    render(){
        return(

            <div>
                <form>
                    <i className="fab fa-instagram"></i>
                    <h2>Welcome To Instaclone</h2>
                    <p>Please Login to Continue</p>
                    <input type='text'
                           name='username'
                           placeholer='Username'
                    />
                    <input 
                            type='password'
                            name='password'
                            placeholder='Password'
                    />
                    <Button>Log In</Button>

                </form>
            </div>
        )
    }
}

export default Login