import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`

    width: 100%;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 30px;
   
    box-shadow: 3px 3px 5px 6px #ccc;
    padding:0;
    color: white;
    background: linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */; 

  `  ;


const insta ={
    margin: '0 10px'
}

const input = {
    height: 'auto',
    widht: '40px',
    borderRadius:'30px',
    border: 'none',
    textAlign: 'center',
    background: 'black',

}
const SearchBar = props =>{
  
    return (
    <MainDiv>
        
            <i className="fab fa-instagram"></i>
            <span > | </span>
            <span >Instagram</span>
        
       
        <input style={input} type="text" placeholder="Search" 
         onChange={(event) => {props.change(event)
                               props.postSearch(event)} } />
       
        
            <i  className="far fa-compass"></i>
            <i  className="far fa-heart"> </i>
            <i  className="far fa-user"></i>
       
    </MainDiv>
    )
}

export default SearchBar