import React from 'react';
import AddComments from './AddComments';
import CommentSection from './CommentSection';
import PropTypes from 'prop-types';

const container = {
    width: '45%'
}
class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ''
    };
  }
  
  
  handleComment = event => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const newComment = { text: this.state.comment, username: 'brandon_allison', timestamp: Date.now() };
    console.log(newComment);
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: '' });
  };


  render() {
    return (
      <div style ={container}>
        {this.state.comments.map((comment) => <CommentSection  comment={comment} />)}

        <AddComments 
         
         comment={this.state.comment}
         addComment={this.handleSubmit}
         changeComment={this.handleComment} />

      </div>
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
