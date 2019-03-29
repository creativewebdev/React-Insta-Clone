import React from 'react';

const icons={
    display: 'flex',
    textAlign: 'left',
   
}

const icon={
  margin: ' 0 5px'
}
const Likes = props => {
    
  return [
    <div style={icons}
     
      
      
    >
      <div style={icon}>
        <i className="heart" className="far fa-heart" onClick={props.addLikes} />
      </div>
      <div style={icon} >
        <i className="far fa-comment" />
      </div>
    </div>,
    <div style={icon} key="likes-container">
      <div >Likes: {props.likes}</div>
    </div>
  ];
};

export default Likes;