import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import styles from './postStyle'
import Router from 'next/router'
import jscookie from 'js-cookie'
import axios from 'axios'

class Post extends Component{
    state = {
            details : this.props.url.query.id,
            post:[]
        }
    
    componentWillMount(){
        axios.get(`http://api.pihitak.com/post/${this.state.details}`)
        .then((Response)=>{
           this.setState({
                post:Response.data.Items[0]
           })
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    render(){
        const {post} = this.state;
        return(
            <div className="container">
            <img src={post.PostSrc} alt="" className="post-img"/>
                        <h3>{post.postTitle}</h3>
                        <p>{post.PostDesc}</p>
                    <style jsx>{styles}</style>
            </div> 
        )
    }
}

 export default withLayout(Post)