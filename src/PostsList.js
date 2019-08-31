import React from 'react'
import axios from 'axios'

import PostItem from './PostItem'

class PostsList extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            endIndex: 25
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data
                this.setState({posts})
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleClick = () => {
        const totalPosts = this.state.posts.length;
        console.log("total posts: "+totalPosts+"End Index: "+this.state.endIndex)
        if(this.state.endIndex < totalPosts) {
            this.setState(prevState => {
                return {
                    endIndex: prevState.endIndex += 25
                }
            })
        } else {
            alert("All available posts are displayed in page")
        }

    }

    render() {
        return (
           <div>
               <h2>Listing Posts - {this.state.endIndex}</h2>
               <ul>
                    {this.state.posts.slice(0,this.state.endIndex).map(post => {
                        return <PostItem key={post.id} id={post.id} title={post.title} />
                    })}
               </ul>
               <button type="button" onClick={this.handleClick}>Load More Posts</button>
           </div>
        )
    }
}

export default PostsList