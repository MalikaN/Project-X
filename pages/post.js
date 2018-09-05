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
        axios.get('http://api.pihitak.com/post',{
            params: {
                customId: val
            }
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
        console.log(this.state.activeLink)
        const {post,activeLink} = this.state;
        return(
            <div className="container">
                <div className="inner-container">
                    <div className="upper-div">
                        <div className="inner-upper-div">
                            <h2>{post.postTitle}</h2>
                            <div className="created-user"> <span>By{' '}{post.createdUser}</span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="middle-div">
                        <div className="img-container">
                            <div className="inner-img-container">
                            <img src={post.PostSrc} alt="" className="card__image"/>
                            </div>
                        </div>
                        <div className="right-box-pane">
                            <div className="rbp">
                                <div className="rbp-details"><span>11112234</span></div>
                                <span className="rbp-title">Account number</span>
                            </div>
                            <div className="rbp">
                                <div className="rbp-details"><span>0779996323</span></div>
                                <span className="rbp-title">Mobile</span>
                            </div>
                            <div className="rbp">
                                <div className="rbp-details"><span>Matara,Sri Lanka</span></div>
                                <span className="rbp-title">Town</span>
                            </div>
                            <div className="social-media-icons">
                                <ul className="social-icons">
                                    <li><a href="" className="social-icon"> <i className="fa fa-facebook"></i></a></li>
                                    <li><a href="" className="social-icon"> <i className="fa fa-twitter"></i></a></li>
                                    <li><a href="" className="social-icon"> <i className="fa fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div className="rbp">
                                <span className="rbp-title">created on 3rd sep 2018</span>
                            </div>
                            
                        </div>
                    </div>
                    <div className="middle-navbar">
                        <div className="inner-middle-navbar">
                            <div className="row">
                                <a className="nav-item">Story</a>
                            </div>                          
                        </div>
                    </div>
                    <div className="lower-div">
                        <div className="inner-lower-div">
                            {post.PostDesc}
                        </div>
                    </div>
                </div>
                    <style jsx>{styles}</style>
            </div> 
        )
    }
}

 export default withLayout(Post)