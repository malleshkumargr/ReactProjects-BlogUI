import React from 'react'

function CommentItem(props) {
    return (
        <li>
            <p>Comment - {props.body}</p>
            <p>name: {props.name}</p>
            <p>email: {props.email}</p>
        </li>
    )
}

export default CommentItem