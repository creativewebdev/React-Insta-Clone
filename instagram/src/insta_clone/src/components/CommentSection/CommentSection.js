import React from 'react'
import PropTypes from 'prop-types';

const CommentSection = props => {
        
     return(
        <div>
                <span><strong>{props.comment.username}</strong></span>
                <span>{props.comment.text}</span>

        </div>
     )
      }
        Comment.propTypes = {
        comment: PropTypes.shape({
        username: PropTypes.string,
        text: PropTypes.string
        })
        };

export default CommentSection