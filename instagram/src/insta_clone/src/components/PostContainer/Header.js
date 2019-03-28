import React from 'react';
import styled from 'styled-components'

const Image = styled.img`
    border-radius:200px;
    height: 30px;
    width: 30px;
    `;

const headerDiv={

    display:'flex',
    margin: '10px 0',
    justifyContent: 'flex-start'
}

const Header = props => {
    
  return (
    
      <div style={headerDiv}>
        <Image 
          alt="header image"
          src={props.data.thumbnailUrl}/>
        {props.data.username}
      </div>
   
  );
};

export default Header;