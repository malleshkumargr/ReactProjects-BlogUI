import React from 'react'
import axios from 'axios'
import CommentItem from './CommentItem'
import { Link } from 'react-router-dom'

class PostShow extends React.Component {
    constructor() {
        super()
        this.state = {
            post: {},
            author: '',
            comments: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                const post = response.data
                const userId = response.data.userId
              //  const postId = response.data.id
                this.setState({post})

                axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
                    .then(response => {
                        const author = response.data.name
                        this.setState({author})
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })

            axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
                    .then(response => {
                        //console.log(response.data)
                        const comments = response.data
                        this.setState({comments})
                    })
                    .catch(error => {
                        console.log(error)
                    })
    }

    render() {
        console.log("Post Show Component: "+this.props)
        return (
            <div>
                 <p>Post Author - {this.state.author}</p>
                 <p>Post Title - {this.state.post.title}</p>
                 <p>Post Body - {this.state.post.body}</p>
                 <h2>Post No: {this.state.post.id} Comments - {this.state.comments.length}</h2>
                 <ul>
                     {this.state.comments.map(comment => {
                         return <CommentItem key={comment.id} name={comment.name} email={comment.email} body={comment.body} />
                     })}
                 </ul>
            </div>
        )
    }
}

export default PostShow