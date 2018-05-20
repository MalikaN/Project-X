import Link from 'next/link'
import React,{Component} from 'react'
import jscookie from 'js-cookie'
import styles from './HeaderStyle'

class Header extends Component{

    handleClick(){
        this.Greeting()
    }
    UserGreeting() {
        return <Link href=""><a onClick={this.handleClick()}>Logout</a></Link>;
      }
      
    GuestGreeting() {
        jscookie.remove('token')
        console.log('logout',this.cookie)  
        return <Link href="/login" ><a>Login</a></Link>;
      }
    Greeting() {
        const cookie = jscookie.get('token')
        
        if (cookie) {
          return this.UserGreeting();
        }
  
        return this.GuestGreeting();
         
      }
    render(){
        return(
            <div> 
            <div className="menu">
                <div className="logo">
                <Link href="/" >
                        <a className="title">Project X</a>
                    </Link>
                </div>
                <div className="submenu">
                    <div className="addpost">
                        <Link href="/add-post" >
                            <a>Add Post</a>
                        </Link>
                    </div>
                    <div className="auth">
                        {this.Greeting()}
                    </div>
                    <div className="signup">
                        <Link href="/signup">
                            <a >Signup</a>
                        </Link>
                    </div>                 
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