import React from 'react'
import Comments from '../CommentSection/CommentSection.js'




const flex = {
    display: 'flex'
    
}

const img = {
    height: '50px',
    width: "50px"
}


const PostContainer = props => {
return( 
    
<div> 
{props.Data.map(user => 

<div  key ={user.timestamp}> 
<div style={flex}>
<img style={img} src={user.thumbnailUrl} alt={user.timestamp}/>
<p>{user.username}</p>
</div>
<img src={user.imageUrl} alt={user.timestamp}/>
<div>
<i className="far fa-heart"> </i>
<i className="far fa-comment"></i>
<Comments comments={user.comments} />
</div>


</div>
)} 
</div>)
}
export default PostContainer