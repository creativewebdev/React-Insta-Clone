import React from 'react';

const Likes = props => {
    console.log(props)
  return [
    <div
     
      key="likes-icons-container"
      
    >
      <div className="like-section-wrapper">
        <i className="far fa-heart" onClick={props.addLikes} />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>,
    <div className="like-section" key="likes-container">
      <div className="like-section-wrapper">{props.likes}</div>
    </div>
  ];
};

export default Likes;