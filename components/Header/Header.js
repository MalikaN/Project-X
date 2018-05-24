import Link from 'next/link'
import React,{Component} from 'react'
import jscookie from 'js-cookie'
import styles from './HeaderStyle'
import Router from 'next/router'

class Header extends Component{
    state = {
        userToken: ''
    }

    componentDidMount() {
        this.setState({
            userToken: jscookie.get('token')
        })
    }

    logout=()=>{
        this.setState({
            userToken: ''
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
                        <a className="title">Project X</a>
                    </Link>
                </div>

                <div className="submenu">
                    {userToken ?
                        <React.Fragment>
                            <div className="addpost">
                                <Link href="/add-post" >
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
                            <div className="auth">
                                <Link href="/login" ><a>Login</a></Link>
                            </div>
                            <div className="signup">
                                <Link href="/signup">
                                    <a >Signup</a>
                                </Link>
                            </div>   
                        </React.Fragment>
                    }        
                </div>  
            </div>

        <style jsx>{styles}</style>
        <style jsx global>{`
            .auth >a{
                margin: 13px 0 10px 20px;
                text-decoration:none;
                color:#407FC7;
                vertical-align:-webkit-baseline-middle;
            }
        `}</style>
    </div>
        )
    }
}
export default Header