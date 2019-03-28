import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Span = styled.span`
margin: 5px 5px 0 0;
font-size: .7em;
`;

const CommentSection = props => {
        
     return(
        <div>
                <Span><strong>{props.comment.username}:</strong></Span>
                <Span>{props.comment.text}</Span>

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