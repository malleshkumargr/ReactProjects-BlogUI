import React from 'react'
import { Link } from 'react-router-dom'

function PostItem(props) {
    return (
        <li>
            <Link to={`/show-post/${props.id}`}>{props.title}</Link>
        </li>
    )
}

export default PostItem