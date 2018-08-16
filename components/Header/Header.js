import React,{Component} from 'react'
import jscookie from 'js-cookie'
import styles from './HeaderStyle'
import Router from 'next/router'
import { Link } from '../../routes'

class Header extends Component{
    state = {
        userToken: {}
    }

    componentDidMount() {
        let token = JSON.parse(jscookie.get('token') || '{}')
        this.setState({
            userToken:token
        })
    }

    logout=()=>{
        this.setState({
            userToken: {}
        })
        jscookie.remove('token')
        Router.push('/')
    }
    
    render(){

        const { userToken } = this.state;
        return(
            <div> 
                <div className="menu">
                <div className="logo">
                <Link href="/" >
                            <a className="title">Pihitak</a>
                           {/* <img src="http://infoprut.ro/wp-content/uploads/2013/06/Intelegere.jpg" alt="" className="title"/> */}
                        
                    </Link>
                </div>

                <div className="submenu">
                    {userToken.access_token ?
                        <React.Fragment>
                            <div className="addpost">
                                <Link route="my-posts" >
                                    <a>My Posts</a>
                                </Link>
                            </div>
                            <div className="addpost">
                                <Link route="add-post" >
                                    <a>Add Post</a>
                                </Link>
                            </div>
                            <div className="buttonLink">
                                <a  onClick={() => this.logout()}>
                                    Logout
                                </a>
                            </div>
                        </React.Fragment>
                    :
                        <React.Fragment>
                            <div>
                                <Link route="login" >
                                    <a className="auth">Login</a>
                                </Link>
                            </div>
                            <div>
                                <Link route="signup">
                                    <a className="signup">Signup</a>
                                </Link>
                            </div>   
                        </React.Fragment>
                    }        
                </div>  
            </div>

        <style jsx>{styles}</style>
    </div>
        )
    }
}
export default Header