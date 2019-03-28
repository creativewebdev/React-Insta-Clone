import React, { Component } from 'react';
import CommentContainer from '../CommentSection/CommentContainer';
import styled from 'styled-components'

import Header from './Header'
import Likes from './Likes'
import PropTypes from 'prop-types';


const Card = styled.div`
    margin: 20px 0;
    font-size: 20px;
    display: flex;
    width: 650px;
    flex-direction: column;
    border: 1px solid black;
    box-shadow: 3px 3px 5px 6px #ccc;
    padding: 10px;
    border-radius: 5px;
    background: white;
`;


class Post extends Component {
    constructor(props){
      super(props);
      
      this.state = {
        likes: props.data.likes
      }
    }

    addLikes = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
      };
      
    
   render() {
       return(
        <Card>
          <Header data={this.props.data}/>
          <img
            src={this.props.data.imageUrl}
            alt="post"
          />

          <Likes data={this.props.data} likes={this.state.likes} addLikes={this.addLikes}/>

          <CommentContainer 
          comments={this.props.data.comments} 
          value={this.props.comment}
          handleAddItems={this.props.addComment} />
      
      </Card>
  
       )
  }
}
    Post.propTypes = {
    post: PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number
    })
  };
  

export default Post

