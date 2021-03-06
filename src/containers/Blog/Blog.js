import React, { Component } from 'react';
import './Blog.css';
import { Route, NavLink, Switch} from 'react-router-dom'
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';


class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color:"blue" 
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname:"/new-post",
                                hash:"#submit",
                                search:"?quick-submit=true"
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/" exact component={Posts} />
                </Switch>
                {/* <Route path="/" exact render={()=><Posts />} /> */}
                {/* <Posts /> */}
            </div>
        );
    }
}

export default Blog;