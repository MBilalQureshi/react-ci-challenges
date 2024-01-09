import React from 'react'

function PostItem(props) {
  return (
    <div>
        {props.savedPosts.map(post => 
            <div key={post.title} className={props.css.SearchItem}>
                <p>{post.title}</p>
                <p>{post.name}</p>
                <img src={post.image} />
                <p>{post.description}</p>
            </div>
        )}
    </div>
  )
}

export default PostItem