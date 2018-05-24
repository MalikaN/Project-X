import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import posts from '../components/Posts'
import Link from 'next/link'
import styles from './indexStyle'

class Index extends Component{
    render(){
        return(
            <ul className="cards">
            {posts.map(function(post,i){
                return(
                        <li className="cards__item" key={post.id}>
                            <div className="card">
                                <img src={post.display_src} alt="" className="card__image"/>
                            <div className="card__content">
                                <div className="card__title">{post.title}</div>
                                <p className="card__text">{post.body}</p>
                                <Link href={`/post?id=${post.id}`}>
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