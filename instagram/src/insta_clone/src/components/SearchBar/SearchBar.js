import React from 'react'

const searchStyle ={
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    
}
const SearchBar = () =>{
    return (
    <div style={searchStyle}>
        <i className="fab fa-instagram"></i>
        <input 
        type="text"
        name="search"
        placeholder="search"
        />
        <i className="far fa-compass"></i>
        <i className="far fa-heart"> </i>
        <i className="far fa-user"></i>
    </div>
    )
}

export default SearchBar