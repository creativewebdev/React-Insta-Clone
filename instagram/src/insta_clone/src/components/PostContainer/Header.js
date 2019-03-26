import React from 'react';

const img ={
    borderRadius:'200px',
    height: '30px',
    width: '30px',
}

const headerDiv={
    display:'flex',
    alignItems: 'center',
    margin: '10px 0'
}

const Header = props => {
    
  return (
    <div >
      <div style={headerDiv}>
        <img style={img}
          alt="header image"
          src={props.data.thumbnailUrl}/>
        {props.data.username}
      </div>
    </div>
  );
};

export default Header;