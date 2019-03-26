import React from 'react'

const addComment ={
    width: '100%',
    border: 'none',
    borderTop: '1px solid black',
    marginTop: '20px',
    paddingTop: '10px'
}

const AddComments = props => {

    return (
    <div>
    <form onSubmit={props.handleSubmit}>
    <input style={addComment}  onChange = {props.handleAdd}  
            type="text"
            placeholder= "Add Comment..."
            value={props.commentAdd}/>
    </form>
    </div>
    
    )   
    

    }

export default AddComments
