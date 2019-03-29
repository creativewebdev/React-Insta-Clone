import React, {Component} from 'react';
import PostContainer from './PostContainer.js';
import Header from '../SearchBar/SearchBar.js'
import dummyData from '../../dummy-data.js'
import styled from 'styled-components'


const appStyle = {
    
    height: 'auto',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
  }

const PostDiv = styled.div `
    background: #F2F2F2;
    width: 100%;
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

            <span  class="glyphicon glyphicon-log-out" onClick={this.props.handleLogOut}></span>
            
        
            <PostContainer style={appStyle} 

            data={
            this.state.filteredPosts.length > 0
            ? this.state.filteredPosts
            : this.state.data
            }
            />

       


    </PostDiv>

            )
        }
    }

export default PostPage