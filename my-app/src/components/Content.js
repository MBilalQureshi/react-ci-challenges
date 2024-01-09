import css from './css/Content.module.css'
import React, { Component } from 'react'
import {savedPosts} from '../posts.json'

export class Content extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
  render() {
    return (
      <div>
        <div className={css.TitleBar}>
            <h1>My Photos</h1>
        </div>
        <div className={css.SearchResults}>
            {savedPosts.map(item => (
                <div className={css.SearchItem}>
                    <p>Individual Post</p>
                </div>
            ))}
        </div>
      </div>
    )
  }
}

export default Content