import React, {Component} from 'react';
import PostContainer from './PostContainer.js';
import Header from '../SearchBar/SearchBar.js'
import dummyData from '../../dummy-data.js'

const appStyle = {
    width: '100%',
    height: 'auto',
    fontSize: '20px'
  }

class PostPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [],
            filteredPosts: []

        }
    }

    componentDidMount (){
        this.setState({data:dummyData})
    }

    handleChange = event => {
        this.setState({ comment: event.target.value });
      };
    
      searchHandler = event => {
        console.log(event.target.value)
        const posts = this.state.data.filter(data => {
          if (event.target.value === data.username ) {
            return data;
          }
        });
        console.log(posts)
        this.setState({ filteredPosts: posts });
      };

    render(){
        return(
            <div style={appStyle}>
            <button onClick={this.props.handleLogOut}>Log Out</button>
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

        )
    }
}

export default PostPage