import React from 'react'
import { Link } from 'react-router-dom'

function AuthorItem(props) {
    return (
       <li>
           <Link to={`/show-author/${props.id}`}>{props.name}</Link>
       </li>
    )
}

export default AuthorItem