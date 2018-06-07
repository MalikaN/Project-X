import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
// import posts from '../components/Posts'
import Link from 'next/link'
import styles from './indexStyle'
import axios from 'axios'

class Index extends Component{
    state={
        posts:[]
    }

    componentWillMount(){
        axios.get('http://localhost:5000/')
        .then((Response)=>{
            this.setState({
                posts:Response.data.Items
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    render(){
        const { posts } = this.state;
        return(
            <ul className="cards">
            {posts.map(function(post,i){
                return(
                    <li className="cards__item" key={post.postId} key={i}>
                        <div className="card">
                            <img src={post.PostSrc} alt="" className="card__image"/>
                            <div className="card__content">
                                <div className="card__title">{post.postTitle}</div>
                                <p className="card__text">{post.PostDesc}</p>
                                <Link href={`/post?id=${post.postId}`}>
                                    <div className="btn btn--block">Read More >></div>
                                </Link>                             
                            </div>
                        </div>
                    </li>
                )
            })}       
            <style jsx>{styles}</style>
            </ul>
        )
    }
}

export default withLayout(Index)