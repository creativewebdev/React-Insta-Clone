import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`

    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 30px;
    border: 1px solid black;
    margin: 5px 0;
    padding:10px;
    background:#F2F2F2; 

  `  ;


const insta ={
    margin: '0 10px'
}

const input = {
    height: '20px',
    widht: '40px'
}
const SearchBar = props =>{
  
    return (
    <MainDiv>
        <div style={insta}>
            <i style={insta} className="fab fa-instagram"></i>
            <span style={insta}>|</span>
            <span style={insta}>Instagram</span>
        </div>
        <div>
        <input style={input} type="text" placeholder="Search" 
         onChange={(event) => {props.change(event)
                               props.postSearch(event)} } />
        </div>
        <div >
            <i style={insta} className="far fa-compass"></i>
            <i style={insta} className="far fa-heart"> </i>
            <i style={insta} className="far fa-user"></i>
        </div>
    </MainDiv>
    )
}

export default SearchBar