import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import Link from 'next/link'
import styles from './SignupStyle'

class Signup extends Component{
    render(){
        return(
            <div className="container">
                <form className="form">
                    <h1>Sign up</h1>
                    <div className="form-content">
                        <input id="txtFirstName" type="text" placeholder="First Name"/>
                        <input id="txtLastName" type="text" placeholder="Last Name"/>
                        <input id="txtEmail" type="text" placeholder="Email"/>
                        <input id="txtpassword" type="password" placeholder="Password"/>
                        <div className="button">sign up</div>
                        <div className="loginpath">
                            Already have an account?
                            <Link href="/login">
                                <a  className="login">Log in</a>
                            </Link>
                        </div>
                    </div>
                </form>
                <style jsx>{styles}</style>
            </div>
        )
    }
}

export default withLayout(Signup)