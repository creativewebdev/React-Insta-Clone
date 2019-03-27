import React, { Component } from 'react';
import CommentContainer from '../CommentSection/CommentContainer';

import Header from './Header'
import Likes from './Likes'
import PropTypes from 'prop-types';

const card={
    margin: '20px 0',
    fontSize: '20px',
    display: 'flex',
    width: 'auto',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid black',
    
    
}


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
        <div style={card}>
        
            
                <Header data={this.props.data}/>
           
        
          <img
            src={this.props.data.imageUrl}
            alt="post"
          />
        
        
        <Likes data={this.props.data} likes={this.state.likes} addLikes={this.addLikes}/>
        
        
        <CommentContainer style={card}
        comments={this.props.data.comments} 
        value={this.props.comment}
        
        handleAddItems={this.props.addComment} />
      
      </div>
  
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

