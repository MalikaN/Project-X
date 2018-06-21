import React,{ Component } from 'react'
import indexStyles from './indexStyle'
import myPostStyles from './myPostStyle'
import Link from 'next/link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt'

const Card =({post,index})=>{
    console.log(index)
        return(
            <Link href={`/post?id=${post.postId}`} >                       
            {index ?           
                
                <li className="cards__item" >
                    <a className="link" >
                        <div className="card">
                            <div className="imgOuterDiv">
                                <img src={post.PostSrc} alt="" className="card__image"/>
                            </div>                             
                            <div className="card__content">
                                <div className="card__title">{post.postTitle}</div>
                                <div className="card__text">{post.PostDesc}</div>                  
                            </div>
                        </div>
                    </a>
                    <style jsx>{ indexStyles }</style>
                </li>
            
            :
           
            <li className="cards__item" key={post.postId}>
            <div className="card">
                <div className="imgOuterDiv">
                    <Link href={`/post?id=${post.postId}`}>    
                        <img src={post.PostSrc} alt="" className="card__image"/>
                    </Link>
                    <div className="edit">
                        <Link href={`/edit-post?id=${post.postId}`}>
                            <a><FontAwesomeIcon icon={ faPencilAlt }/></a>
                        </Link>
                    </div>                                       
                </div>                             
                <div className="card__content">
                    <div className="card__title">{post.postTitle}</div>
                    <div className="card__text">{post.PostDesc}</div>                  
                </div>
            </div>
            <style jsx>{ myPostStyles }</style>
        </li>                                  
        
            }   
            </Link>       
                
        )
}

export default Card