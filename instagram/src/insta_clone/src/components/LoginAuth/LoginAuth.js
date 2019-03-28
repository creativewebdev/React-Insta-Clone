import React from 'react';


const loginAuth = PostsPage => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        
         loggedIn: false,
         
         
        
      };
    }
    componentDidMount() {
        if (localStorage.getItem('username')) {
            this.setState ({loggedIn: true});
        }else {
            this.setState ({loggedIn: false});
        }
    }
    
   handleLogOut = () =>{
    localStorage.removeItem('username'); 
    this.setState({loggedIn: !this.state.loggedIn});
}

     
    render() {
      if (!this.state.loggedIn) return <LoginPage handleLogin={this.handleLogin} />;
      return <PostsPage  handleLogOut={this.handleLogOut}/>;
    }
  };

export default loginAuth;