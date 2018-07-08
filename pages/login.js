import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import axios from 'axios'
import Router from 'next/router'
import jscookie from 'js-cookie'
import styles from './LoginStyle'

class Login extends Component{

    handleInputChange=(event)=>{
        const target = event.target;      
        const value = target.value;
        const name = target.name;
        this.setState({
          [name]: value
        })
      }

    handleSubmit=(event)=> {
      axios.post('http://localhost:5000/login', {
        email: this.state.email ,
        password: this.state.password
        })
        .then(function (response) {
            if(response.data.status == 422){
                let userInfo ={
                    access_token : response.data.access_token,
                    userId : response.data.userId,
                    loginuser : response.data.username
                }
                jscookie.set('token',userInfo); 
                Router.push('/')  
            }
            else{
                console.log('Authentication Failure')
            }
        })
        .catch(function (error) {
        console.log(error);
        
      });
    }

    render(){
        return(
        <div className="login-container">
            <form className="form">
                <h1>Sign in</h1>
                <div className="form-content">
                    <input id="txtUserName" type="text" name="email" placeholder="Email" onChange={this.handleInputChange}/>
                    <input id="txtpassword" type="password" name="password" placeholder="Password" onChange={this.handleInputChange}/>
                    <div className="button" onClick ={this.handleSubmit}>sign in</div>
                </div>
            </form>
            <style jsx>{styles}</style>
        </div>
        )
    }
}

export default withLayout(Login)