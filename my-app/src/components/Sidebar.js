import React from 'react'
import css from './css/Sidebar.module.css'

function Sidebar() {
    return (
        <div class={css.sidebar}>
            <a href = "#." target= "_blank">My Photos</a>
            <a href = "#." target= "_blank">My Illustrations</a>
            <a href = "#." target= "_blank">My Paintings</a>
        </div>
    )
}

export default Sidebar