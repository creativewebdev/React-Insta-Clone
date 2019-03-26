import React from 'react'
import Post from './Post.js'


const postDiv = {
  
}

const PostContainer = props => {
    console.log('PostContainer', props)


return(     
 
<div style={postDiv}>

        {props.data.map(data => (
          
          <Post 

            key={data.id}
            data={data}
            handleClick={props.handleClickIcon}
            clicks={props.clicks}
          />
          

        ))}

</div>
)
}

export default PostContainer