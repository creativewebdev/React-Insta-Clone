import React, { Component } from 'react';
import dummyData from './dummy-data.js'
import Header from './components/SearchBar/SearchBar.js'
import PostContainer from './components/PostContainer/PostContainer.js'


import './App.css';

const appStyle = {
  width: '100%',
  height: 'auto',
  fontSize: '20px'
}

class App extends Component {
  constructor(){
    super();
    
    this.state = {

      data: [],
      likes: [],
      filteredPosts: []

    }
  }

  componentDidMount() {
    
    this.setState({ data: dummyData });
  }
  
  handleChange = event => {
    this.setState({ comment: event.target.value });
  };

  searchHandler = event => {
    console.log(event.target.value)
    const posts = this.state.data.filter(data => {
      if (data.username.includes(event.target.value)) {
        return data;
      }
    });
    this.setState({ filteredPosts: posts });
  };

 
  render() {
    return (
      <div style={appStyle}>

        <Header postSearch={this.searchHandler} change={this.handleChange}/>
        <div>
          
        <PostContainer
        
        data={
          this.state.filteredPosts.length > 0
            ? this.state.filteredPosts
            : this.state.data
        }
           />

       </div>
      </div>
    );
  }
}

export default App;
