import React,{ Component } from 'react'
import indexStyles from './indexStyle'
import myPostStyles from './myPostStyle'
import { Link } from '../routes' //next-routes
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt'

const Card =({post,index})=>{
        return( 
        <div className="cards__item">                   
            {index ?      
            <Link route='post' params={{slug: post.Slug,customCode: post.CustomCode}}>     
                <div className="inner_cards__item">
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
                                 
                </div>
            </Link>
            :
            <div>
                <li className="mypost_cards__item" key={post.postId}>
                    <div className="mypost_card">
                        <div className="mypost_imgOuterDiv">
                            <Link route='post' params={{slug: post.Slug,customCode: post.CustomCode}}>    
                                <img src={post.PostSrc} alt="" className="mypost_card__image"/>
                            </Link>
                            <div className="edit">
                                <Link route='edit-post' params={{customCode:post.CustomCode}}>
                                    <a><FontAwesomeIcon icon={ faPencilAlt }/></a>
                                </Link>
                            </div>                                       
                        </div>                             
                        <div className="mypost_card__content">
                            <div className="mypost_card__title">{post.postTitle}</div>
                            <div className="mypost_card__text">{post.PostDesc}</div>                  
                        </div>
                    </div>
                </li> 
            </div>
            }   
            <style jsx>{ myPostStyles }</style>
            <style jsx>{ indexStyles }</style>
        </div>      
                
        )
}

export default Card