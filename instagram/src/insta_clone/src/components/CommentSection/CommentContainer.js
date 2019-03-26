import React from 'react';
import AddComments from './AddComments';
import CommentSection from './CommentSection';


class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      commentAdd: ''
    };
  }


  handleAdd = event => {
    this.setState({ commentAdd: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    const newComment = { text: this.state.commentAdd, username:"brandonA"  };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, commentAdd: '' });
    
  };


  render() {
    return (
      <div>
        {this.state.comments.map((comment) => <CommentSection  comment={comment} />)}

        <AddComments 
        
        comment={this.state.commentAdd}
        handleSubmit={this.handleSubmit}
        handleAddItems={this.handleAdd} />

      </div>
    );
  }
};



export default CommentContainer;
