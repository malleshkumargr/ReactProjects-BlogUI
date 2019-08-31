import React from 'react'
import axios from 'axios'
import PostItem from './PostItem';

class AuthorShow extends React.Component {
    constructor() {
        super()
        this.state = {
            author: {},
            posts: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => {
                const author = response.data
                this.setState({author})

                axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
                    .then(response => {
                        const posts = response.data
                        this.setState({posts})
                    })
                    .catch(error => {
                        console.log(error)
                    })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <p>Name: {this.state.author.name}</p>
                <p>Email: {this.state.author.email}</p>
                <h3>Number of Posts written by {this.state.author.name}: {this.state.posts.length}</h3>
                <ul>
                    {this.state.posts.map(post => {
                        return <PostItem key={post.id} id={post.id} title={post.title} />
                    })}               
                </ul> 
            </div>
        )
    }
}

export default AuthorShow