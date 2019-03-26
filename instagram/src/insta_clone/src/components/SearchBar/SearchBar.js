import React from 'react'

const searchStyle ={
    width: '90%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '30px',
    margin: '15px'
    
}
const SearchBar = () =>{
    return (
    <div style={searchStyle}>
        <div>
            <i className="fab fa-instagram"></i>
            <span>|</span>
            <span>Instagram</span>
        </div>
        <div>
            <input 
            type="text"
            name="search"
            placeholder="search"
            />
        </div>
        <div>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"> </i>
            <i className="far fa-user"></i>
        </div>
    </div>
    )
}

export default SearchBar