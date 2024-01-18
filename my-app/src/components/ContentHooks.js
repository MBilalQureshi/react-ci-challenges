import React ,{useEffect, useState} from 'react'
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'
import css from './css/Content.module.css'
import Loader from './Loader'

function ContentHooks() {
    const [isLoaded, setLoader] = useState(true)
    const [fetchedPosts, setfetechedPosts] = useState([])

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setLoader(false)
            setfetechedPosts(savedPosts)
        },2000)
        return ()=>{
            clearTimeout(timer)
        }
    },[])

    const handleChange = (event) => {
        const name = event.target.value
        const filteredPosts = savedPosts.filter(posts => posts.name.toLowerCase().includes(name))
        setfetechedPosts(filteredPosts)
    }
  return (
    <div>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
              <label htmlFor='searchInput'>
                Search:
              </label>
              <input type="text" id="searchInput" placeholder='By Author' onChange={handleChange}>
              </input>
              <h4>Posts found:{fetchedPosts.length}</h4>
            </form>
        </div>
        <div className={css.SearchResults}>
          {isLoaded ? (<Loader />): (<PostItem savedPosts={fetchedPosts} css={css}/>)}
           
        </div>
      </div>
  )
}

export default ContentHooks