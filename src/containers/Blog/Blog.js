import React, { Component } from 'react';
import axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state={
        posts:[],
        selecetedPostId: null
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response=>{
                const posts = response.data.slice(0,4);
                const updatedPost = posts.map(post=>{
                    return{
                        ...post,
                        author: "Abhijeet"
                    }
                })
                this.setState({posts:updatedPost})
                // console.log(response);
            });
    }
    postSelectedHandler = (id) => {
        this.setState({selecetedPostId:id})
    }
    render () {
        const posts = this.state.posts.map(post=>{
            return <Post 
                key={post.id} 
                title={post.title} 
                author={post.author} 
                clicked={()=>this.postSelectedHandler(post.id)}/>
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selecetedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;