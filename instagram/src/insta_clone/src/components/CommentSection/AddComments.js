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
    <form onSubmit={props.addComment}>
    <input style={addComment}  
             type="text"
             value={props.comment}
             placeholder="Add comment... "
             onChange={props.changeComment}/>
    </form>
    </div>
    
    )   
    

    }

export default AddComments
