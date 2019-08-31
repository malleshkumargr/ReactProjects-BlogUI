import React from 'react'
import axios from 'axios'
import AuthorItem from './AuthorItem'

class Author extends React.Component {
    constructor() {
        super()
        this.state = {
            authors: []
        }
    }
    
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
            .then(response => {
                const authors = response.data
                this.setState({authors})
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <div>
                <h2>List of Authors - {this.state.authors.length}</h2>
                <ul>
                    {this.state.authors.map(author => {
                        return <AuthorItem key={author.id} id={author.id} name={author.name} />
                    })}
                </ul>
            </div> 
        )
    }
}

export default Author