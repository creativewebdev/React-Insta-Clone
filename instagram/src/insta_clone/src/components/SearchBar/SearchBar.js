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

const insta ={
    margin: '0 10px'
}

const input = {
    height: '20px',
    widht: '40px'
}
const SearchBar = props =>{
  
    return (
    <div style={searchStyle}>
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
    </div>
    )
}

export default SearchBar