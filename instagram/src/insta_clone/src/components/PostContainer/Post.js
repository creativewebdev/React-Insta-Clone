import React from 'react'
import CommentContainer from '../CommentSection/CommentContainer';
import Header from './Header'
import PropTypes from 'prop-types';

const card={
    margin: '20px 0',
    fontSize: '20px'
}



const Post = props => {
    console.log('PostProps', props)
    
    return (
        <div style={card}>
            <div>
                <Header data={props.data}/>
            </div>
        <div >
          <img
            src={props.data.imageUrl}
            alt="post image"
          />
        </div>
        
        
        <i className="far fa-heart">{props.clicks} </i>
        <i className="far fa-comment"></i>
        <p><strong>{props.data.likes} Likes </strong></p>

        
        <CommentContainer 
        comments={props.data.comments} 
        value={props.comment}
        handleTodoChange={props.changeComment}
        handleAddItems={props.addComment} />/>
      </div>
  
    )
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

