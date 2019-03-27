import React from 'react';


const loginAuth = PostsPage => LoginPage =>
  class extends React.Component {
    constructor(props) {
      super(props);
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
    handleLogin = event => {
        const username = this.state.username;
        localStorage.setItem('username', username);
        
        
      };
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