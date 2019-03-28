import React from 'react';
import AddComments from './AddComments';
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Div = styled.div`
    width:  90%;
    margin: 15px;
`;

class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: '',
      user: localStorage.getItem('username')
    };
  }
  
  
  handleComment = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newComment = { text: this.state.comment, username: this.state.user, timestamp: Date.now() };
    console.log(newComment);
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: '' });
  };


  render() {
    return (
      <Div>
        {this.state.comments.map((comment) => <CommentSection  comment={comment} />)}

        <AddComments 
         
         comment={this.state.comment}
         addComment={this.handleSubmit}
         changeComment={this.handleComment} />

      </Div>
    );
  }
};

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
      PropTypes.shape({ text: PropTypes.string, 
        username: PropTypes.string ,
         id:PropTypes.number})
    )
  };

export default CommentContainer;
