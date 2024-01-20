import css from './css/Content.module.css'
import React, { Component } from 'react'
import PostItemAPI from './PostItemAPI'
import Loader from './Loader'
import axios from 'axios'
import API_KEY from '../secrets'

export class ContentAPI extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
         posts: [],
         name:'',
         savedPosts:[],
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
      this.fetchImages();
    //   this.posts = savedPosts

    }

    async fetchImages(){
        axios.get("https://pixabay.com/api/?key="+API_KEY+"&q=100")
        .then(response => {
            const fetchedPosts = response.data.hits
            console.log(fetchedPosts)

            this.setState({
                isLoaded : false,
                posts : fetchedPosts,
                savedPosts: fetchedPosts,
            })
        })
        console.log(this.state.savedPosts)
    }

    handleNameChange = (event) =>{
      const name = event.target.value
      const filteredPosts = this.state.savedPosts.filter(posts => 
          posts.user.toLowerCase().includes(name)
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
          {this.state.isLoaded ? (<Loader />): (<PostItemAPI fetchedAPIPosts={this.state.posts} css={css}/>)}
           
        </div>
      </div>
    )
  }
}

export default ContentAPI