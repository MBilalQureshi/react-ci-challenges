import css from './css/Content.module.css'
import React, { Component } from 'react'
import {savedPosts} from '../posts.json'
import PostItemAPI from './PostItem'
import Loader from './Loader'

export class ContentAPI extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         posts: [],
         name:'',
      }
    }

    isContentLoaded(){
      setTimeout(()=>{
        this.setState({
          isLoaded : false,
        })
      },2000)
    }

    componentDidMount(){
      this.posts = savedPosts
      this.isContentLoaded();
    }

    handleNameChange = (event) =>{
      const name = event.target.value
      const filteredPosts = savedPosts.filter(posts => 
          posts.name.toLowerCase().includes(name)
        )

      this.setState({
        posts : filteredPosts
      })
        // console.log(filteredPosts)
    }
  render() {
    return (
      <div>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
            <form>
              <label htmlFor='searchInput'>
                Search:
              </label>
              <input type="text" id="searchInput" placeholder='By Author' onChange={(e) => this.handleNameChange(e)}>
              </input>
              <h4>Posts found:{this.state.posts.length}</h4>
            </form>
        </div>
        <div className={css.SearchResults}>
          {this.state.isLoaded ? (<Loader />): (<PostItemAPI savedPosts={this.state.posts} css={css}/>)}
           
        </div>
      </div>
    )
  }
}

export default ContentAPI