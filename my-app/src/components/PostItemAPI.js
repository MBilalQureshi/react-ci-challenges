import React from 'react'

function PostItemAPI(props) {
  return (
    <div>
        {props.fetchedAPIPosts.map(post => 
            <div key={post.id} className={props.css.SearchItem}>
                <p>{post.type}</p>
                <p>{post.user}</p>
                <img src={post.webformatURL} alt={post.tags}/>
                <p>{post.tags}</p>
            </div>
        )}
    </div>
  )
}

export default PostItemAPI
// Extra Tasks:
// Try Refactoring your code to:
// Within the PostItem.js map function, try destructuring the posts from posts.json to 4 separate values e.g. name, title, description, and image.