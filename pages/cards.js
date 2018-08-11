import React,{ Component } from 'react'
import indexStyles from './indexStyle'
import myPostStyles from './myPostStyle'
// import Link from 'next/link'
import { Link } from '../routes' //next-routes
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt'

const Card =({post,index})=>{
        return( 
            <Link route='post' params={{slug: post.Slug,id:post.id}} href={{query:{id:post.id}}}>                   
            {index ?           
                <div className="cards__item" >
                    <a className="link">
                        <div className="outerCard">
                            <div className="card">
                                <div className="imgOuterDiv">
                                    <img src={post.PostSrc} alt="" className="card__image"/>
                                </div>                             
                                <div className="card__content">
                                    <div className="card__title">{post.postTitle}</div>
                                    <div className="card__text">{post.PostDesc}</div>                  
                                </div>
                            </div>
                        </div>
                    </a>
                    <style jsx>{ indexStyles }</style>             
                </div>
            
            :
           
                <li className="cards__item" key={post.id}>
                    <div className="card">
                        <div className="imgOuterDiv">
                            <Link href={`/post?id=${post.id}`}>    
                                <img src={post.PostSrc} alt="" className="card__image"/>
                            </Link>
                            <div className="edit">
                                <Link href={`/edit-post?id=${post.id}`}>
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