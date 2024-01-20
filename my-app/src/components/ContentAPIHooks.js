import css from './css/Content.module.css'
import React, { useState, useEffect } from 'react'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'

function ContentAPIHooks() {
    const [isLoaded, setLoader] = useState(true)
    const [posts, setPosts] = useState([])
    const [savedPosts, setSavedPosts] = useState([])

    useEffect(() => {
        let timer = setTimeout(()=>{
            setLoader(false)
            fetchImages();
        },2000)
        return ()=>{
            clearTimeout(timer)
        }
    },[])

    const fetchImages = () => {
        axios.get("https://pixabay.com/api/?key="+API_KEY+"&q=100")
        .then(response => {
            const fetchedPosts = response.data.hits
            console.log(fetchedPosts)

            setPosts(fetchedPosts)
            setSavedPosts(fetchedPosts)
        })
    }

    const handleNameChange = (event) =>{
        const name = event.target.value
        const filteredPosts = posts.filter(posts => 
            posts.user.toLowerCase().includes(name)
          )
          setSavedPosts(filteredPosts)
      }
  return (
    <div>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
              <label htmlFor='searchInput'>
                Search:
              </label>
              <input type="text" id="searchInput" placeholder='By Author' onChange={handleNameChange}>
              </input>
              <h4>Posts found:{savedPosts.length}</h4>
            </form>
        </div>
        <div className={css.SearchResults}>
          {isLoaded ? (<Loader />): (<PostItemAPI fetchedAPIPosts={savedPosts} css={css}/>)}
        </div>
    </div>
  )
}

export default ContentAPIHooks