import React, { Component } from 'react';
import dummyData from './dummy-data.js'
import Header from './components/SearchBar/SearchBar.js'

import PostContainer from './components/PostContainer/PostContainer.js'

import './App.css';



class App extends Component {
  constructor(){
    super();
    
    this.state = {

      Data: dummyData,

    }
    
    
  }

  render() {
    return (
      <div>
        <Header />
        <PostContainer Data = {this.state.Data}  />
        
      </div>
    );
  }
}

export default App;
