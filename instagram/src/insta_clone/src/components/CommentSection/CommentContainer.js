import React from 'react';
import AddComments from './AddComments';
import CommentSection from './CommentSection';


class CommentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }

  render() {
    return (
      <div>
        {this.state.comments.map((comment) => <CommentSection  comment={comment} />)}
        <AddComments />
      </div>
    );
  }
}



export default CommentContainer;
