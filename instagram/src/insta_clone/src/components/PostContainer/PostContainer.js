import React from 'react'
import Post from './Post.js'
import styled from 'styled-components'


const Div = styled.div`
  
  margin: 20px auto;
  font-size: 20px;
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  background: #F2F2F2;
`;

const PostContainer = props => {
    


return(     
 
<Div>
        {props.data.map(data => (
          
          <Post 
            addLikes={props.addLikes}
            likes={props.likes}
            key={data.id}
            data={data}  
          />
        ))}

</Div>
)
}

export default PostContainer