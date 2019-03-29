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
    padding:0 20px;
    color: white;
    background: linear-gradient(to right, #1a2a6c, #b21f1f, #fdbb2d); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */; 

  `  ;

const Icons = styled.div`
    display:flex;
    align-items: center;
       
`;

const icon = {
    margin: '10px '

}

const insta = {
    marginTop: '8px'
}


const Input = styled.input`
    height: auto;
    width: 400px;
    border-radius:30px;
    border: none;
    text-align: center;
    background: black;

`;

const SearchBar = props =>{
  
    return (
    <MainDiv>
            <Icons>
                <i style={insta} className="fab fa-instagram"></i>
                <span style={icon} > | </span>
                <span  >InstaClone</span>
            </Icons>
       
        <Input type="text" placeholder="Search" 
         onChange={(event) => {props.change(event)
                               props.postSearch(event)} } />
       
            <Icons>
            <i style={icon} className="far fa-compass"></i>
            <i style={icon} className="far fa-heart"> </i>
            <i style={icon} className="far fa-user"></i>
            </Icons>
       
    </MainDiv>
    )
}

export default SearchBar