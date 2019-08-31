import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import PostsList from './PostsList'
import PostShow from './PostShow'
import Author from './Author'
import AuthorShow from './AuthorShow'

function App(props) {
    return (
        <BrowserRouter>
            <div>
                <h1>{props.title}</h1>
                <Link to="/mainpage">Main</Link> &nbsp;
                <Link to="/posts">Posts</Link> &nbsp;
                <Link to="/authors">Authors</Link>
               

                <Route path="/posts" component={PostsList}></Route>
                <Route path="/mainpage" component={PostsList}></Route>
                <Route path="/authors" component={Author}></Route>
                <Route path="/show-post/:id" component={PostShow}></Route>
                <Route path="/show-author/:id" component={AuthorShow}></Route>
            </div>
        </BrowserRouter>
    )
}

export default App