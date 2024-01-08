import React from 'react'

function NavBarChild(props) {
  return (
    <div>
        {
            props.isLoggedIn ? (
                <form>
                    <label>Username</label>
                    <input type="text"></input>
                    <label>Password</label>
                    <input type='password'></input>
                    <button onClick={props.handleClick}>Submit</button>
                </form>
            ) : 
            (
                <button onClick={props.handleClick}>
                    Login
                </button>
            )
        }
    </div>
  )
}

export default NavBarChild