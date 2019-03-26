import React from 'react'

const CommentSection = props => {
        console.log('CommentDiv', props)
     return(
        <div>
                <span><strong>{props.comment.username}</strong></span>
                <span>{props.comment.text}</span>

        </div>
     )
      }


export default CommentSection