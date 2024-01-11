import css from './css/Content.module.css'
import React, { Component } from 'react'
import {savedPosts} from '../posts.json'
import PostItem from './PostItem'
import Loader from './Loader'

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoaded: true,
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
      this.isContentLoaded();
    }

  render() {
    return (
      <div>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
          {this.state.isLoaded ? (<Loader />): (<PostItem savedPosts={savedPosts} css={css}/>)}
           
        </div>
      </div>
    )
  }
}

export default Content