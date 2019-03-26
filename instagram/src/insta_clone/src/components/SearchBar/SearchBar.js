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
const SearchBar = props =>{
    return (
    <div style={searchStyle}>
        <div>
            <i className="fab fa-instagram"></i>
            <span>|</span>
            <span>Instagram</span>
        </div>
        <div>
            <input 
            onKeyDown={props.searchPosts}
            type="text"
            name="search"
            placeholder="search"
            value={props.username}
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