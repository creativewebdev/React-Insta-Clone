import React from 'react'



const AddComments = props => {

    return (
    <div>
    <form onSubmit={props.handleSubmit}>
    <input  onChange = {props.handleAdd}  
            type="text"
            placeholder= "Add Comment..."
            value={props.commentAdd}/>
    </form>
    </div>
    
    )   
    

    }

export default AddComments
