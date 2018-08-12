import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import styles from './postStyle'
import Router from 'next/router'
import jscookie from 'js-cookie'
import axios from 'axios'

class Post extends Component{
    static async getInitialProps ({query}) {
        return query
      }
    state = {
            post:[]
        }
    
    componentDidMount(){
        const val = this.props.url.query.customCode
        axios.get('http://localhost:5000/post',{
            customId: val
        })
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