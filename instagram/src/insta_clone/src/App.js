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
    console.log(dummyData);
    this.setState({ data: dummyData });
  }
  

  postSearch = event => {
    const data = this.state.data.filter(data => {
      if (data.username.includes(event.target.value)) {
        return data;
      }
    });
    this.setState({ filteredPosts: data });
  };

 
  render() {
    return (
      <div style={appStyle}>

        <Header postSearch={this.postSearch}/>
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
