import React,{ Component } from "react";
import axios from '../../../axios'
import { Link, Route} from 'react-router-dom'
import Post from '../../../components/Post/Post'
import  './Posts.css'
import fullPost from '../FullPost/FullPost'


class Posts extends Component{
    
    state={
        posts:[]
    }
    
    componentDidMount(){
        console.log(this.props);
        
        axios.get('/posts')
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
            })
            .catch(error=>{
                this.setState({error:true});

                // console.log("Error : " +error);
                
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selecetedPostId:id})
    }
    
    render(){
        let posts = <p style={{textAlign:"center"}}>Something went wrong !</p>
            if(!this.state.error){
                posts = this.state.posts.map(post=>{
                    return(
                        <Link to={'/posts/'+post.id} key={post.id}>
                            <Post  
                                title={post.title} 
                                author={post.author} 
                                clicked={()=>this.postSelectedHandler(post.id)}/>
                        </Link>
                    )
                })
            }
        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path="/posts/:id" exact component={fullPost} />
            </div>

        )
    }
}

export default Posts;