import React, { Component } from 'react';
import CommentContainer from '../CommentSection/CommentContainer';

import Header from './Header'
import Likes from './Likes'
import PropTypes from 'prop-types';

const card={
    margin: '20px 0',
    fontSize: '20px',
    display: 'flex',
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

    addLike = () => {
        let likes = this.state.likes + 1;
        this.setState({ likes });
      };
      
    
   render() {
       return(
        <div style={card}>
            <div>
                <Header data={this.props.data}/>
            </div>
        <div >
          <img
            src={this.props.data.imageUrl}
            alt="post"
          />
        </div>
        
        <Likes data={this.props.data} likes={this.state.likes} addLikes={this.addLikes}/>

        
        <CommentContainer 
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

