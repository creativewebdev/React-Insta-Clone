import React from 'react';

const icons={
    display: 'flex',
    textAlign: 'left'
}
const Likes = props => {
    
  return [
    <div style={icons}
     
      
      
    >
      <div>
        <i className="heart" className="far fa-heart" onClick={props.addLikes} />
      </div>
      <div >
        <i className="far fa-comment" />
      </div>
    </div>,
    <div className="like-section" key="likes-container">
      <div className="like-section-wrapper">{props.likes}</div>
    </div>
  ];
};

export default Likes;