import React, { Component } from 'react';
import dummyData from './dummy-data.js'
import Header from './components/SearchBar/SearchBar.js'
import PostContainer from './components/PostContainer/PostContainer.js'


import './App.css';

const appStyle = {
  width: '100%',
  height: 'auto'
}

class App extends Component {
  constructor(){
    super();
    
    this.state = {

      data: dummyData,
      clicks: 0

    }
  }


  handleClickIcon() {
    this.setState((clicks) => ({
           clicks: clicks + 1,
           
      }));
  }

  render() {
    return (
      <div style={appStyle}>
        <Header />

        <PostContainer 
        data = {this.state.data} 
        
        clicks={this.state.clicks}/>
       
      </div>
    );
  }
}

export default App;
