import css from './css/NavBarForm.module.css'
import React, { Component } from 'react'
import NavBarChild from './NavBarChild'

export class NavBarForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn : false,
      }
    }

    handleClick = () =>{
        this.setState((prevProps,prevState) => {
            return{
                isLoggedIn : prevState.isLoggedIn === true ? false : true,
            } 
        })
    }

  render() {
    return (
        <div class={css.NavBar}>
        <h1>
            My Gallery
        </h1>
        <NavBarChild isLoggedIn={this.state.isLoggedIn} handleClick={this.handleClick}/>
        </div>
    )
  }
}

export default NavBarForm