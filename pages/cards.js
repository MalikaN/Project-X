import React,{ Component } from 'react'
import indexStyles from './indexStyle'
import myPostStyles from './myPostStyle'
import { Link } from '../routes' //next-routes
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt'
import ContentLoader, { Facebook } from 'react-content-loader'

const Card =({post,index,isLoading})=>{
        if (isLoading) {
            return <div><ContentLoader>
            {/* Pure SVG */}
            <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
            <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
            <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
          </ContentLoader></div>
        }
        return(       
        <div className="cards__item"> 
        {
         index ?      
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
                                <div className="card_lastDate">{post.CreatedBy}
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