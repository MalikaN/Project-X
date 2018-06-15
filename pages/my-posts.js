import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import styles from './myPostStyle'
import Link from 'next/link'
import jscookie from 'js-cookie'
import axios from 'axios'
import 'font-awesome/css/font-awesome.min.css'

class myPost extends Component{

    state={
        LogginUser:'',
        posts:[]
    }

    componentWillMount(){
        let token = jscookie.getJSON('token')

        if(token){
            this.setState({
                LogginUser:token
            },()=>{
                if(this.state.LogginUser){
                    this.fetchAPI()
                }
            })
        }

    }

    fetchAPI(){
        axios.post('http://localhost:5000/my-post',{
            userid:this.state.LogginUser.userId
        })
        .then((Response)=>{
            this.setState({
                posts:Response.data.Items
            })
        })
        .catch(function(error){
            console.log(error);
        })
    }

    render(){
        const { posts } = this.state;
        return(
            <ul className="cards">
            {posts.map(function(post,i){
                return(                   
                        <li className="cards__item" key={post.postId}>
                            <Link href={`/post?id=${post.postId}`} >    
                            <a className="link" >
                                <div className="card">
                                    <div className="imgOuterDiv">
                                        <img src={post.PostSrc} alt="" className="card__image"/>
                                        {/* <div className="edit"><a href="#"><i className="fa fa-pencil fa-lg"></i></a></div> */}
                                    </div>                             
                                    <div className="card__content">
                                        <div className="card__title">{post.postTitle}</div>
                                        <div className="card__text">{post.PostDesc}</div>                  
                                    </div>
                                </div>
                            </a>
                            </Link>
                            {/* <Link href="/edit-post"><img src="https://image.flaticon.com/icons/svg/61/61456.svg" className="editimg"/></Link> */}
                        </li>
                                     
                )
            })}       
            <style jsx>{styles}</style>
            </ul>
        )
    }
}

export default withLayout(myPost)