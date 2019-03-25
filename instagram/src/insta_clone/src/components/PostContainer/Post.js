import React from 'react'



const Post = props => {
    console.log('PostProps', props)
    return (
    <div>
        <img src={props.thumbnailUrl}/>
        <p>{props.username}</p>
        <img src={props.imageUrl}/>
        <p>{props.text}</p>
    </div>
    )
}

export default Post