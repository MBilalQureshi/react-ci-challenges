import React from 'react'

function PostItemAPI(props) {
  return (
    <div>
        {props.savedPosts.map(post => 
            <div key={post.title} className={props.css.SearchItem}>
                <p>{post.title}</p>
                <p>{post.name}</p>
                <img src={post.image} alt={post.title}/>
                <p>{post.description}</p>
            </div>
        )}
    </div>
  )
}

export default PostItemAPI
// Extra Tasks:
// Try Refactoring your code to:
// Within the PostItem.js map function, try destructuring the posts from posts.json to 4 separate values e.g. name, title, description, and image.