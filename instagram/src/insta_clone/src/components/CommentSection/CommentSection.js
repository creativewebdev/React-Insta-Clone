import React from 'react'





const Comments = props => {
return( 
    
<div> 
{props.comments.map(comment => 

<div> 
        <p >{comment.text}</p>
        <p>-{comment.username}</p>
        

</div>



)} 
</div>)
}
export default Comments