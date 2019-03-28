import React, {Component} from 'react';
import PostContainer from './PostContainer.js';
import Header from '../SearchBar/SearchBar.js'
import dummyData from '../../dummy-data.js'
import styled from 'styled-components'

const appStyle = {
    width: '650px',
    height: 'auto',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    
    
    
  }

  const PostDiv = styled.div `
  width: 100vw;
  `;

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

    <PostDiv >
       
            <Header postSearch={this.searchHandler} change={this.handleChange}/>
            <button onClick={this.props.handleLogOut}>Log Out</button>
            
        <div >
            <PostContainer style={appStyle} 

            data={
            this.state.filteredPosts.length > 0
            ? this.state.filteredPosts
            : this.state.data
            }
            />

        </div>


    </PostDiv>

            )
        }
    }

export default PostPage