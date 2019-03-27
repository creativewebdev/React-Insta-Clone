import React from 'react'
import Post from './Post.js'


const postDiv = {
  border: '1px solid black'
}

const PostContainer = props => {
    


return(     
 
<div style={postDiv}>

        {props.data.map(data => (
          
          <Post 
            addLikes={props.addLikes}
            likes={props.likes}
            key={data.id}
            data={data}
           
          />
          

        ))}

</div>
)
}

export default PostContainer