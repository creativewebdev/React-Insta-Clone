import React from 'react'
import styled from 'styled-components'

const CommentDiv = styled.div`
    width: 90%;
    border: none;
    border-top:  1px solid black;
    margin-top:  20px;
    padding-top: 10px;
`;

const Input = styled.input`
width: 100%;
`;

const AddComments = props => {

    return (
    <CommentDiv>
    <form onSubmit={props.addComment}>
    <Input  
             type="text"
             value={props.comment}
             placeholder="Add comment... "
             onChange={props.changeComment}/>
            
    </form>
    </CommentDiv>
    
    )   
    

    }

export default AddComments
