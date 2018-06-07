import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import posts from '../components/Posts'
import styles from './postStyle'
import Router from 'next/router'
import jscookie from 'js-cookie'
import axios from 'axios'

class Post extends Component{
    state = {
            details : this.props.url.query.id
        }
    
    componentWillMount(){
        console.log(this.state.details)
        const params = {
            id:this.state.details
        }
        axios.get(`http://localhost:5000/post/?id=${this.state.details}`)
        .then((Response)=>{
            console.log(Response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    
    componentDidMount(){
        let token = jscookie.getJSON('token')
        if(!token){
            Router.push('/login')
        }
    }

    render(){
        return(
            <div className="container">
                <div className="post-content">
                    <img src={this.state.details[0].display_src} alt="" className="post-img"/>
                    <div className="post">
                        <h3>{this.state.details[0].title}</h3>

                        <p>{this.state.details[0].body}</p>
                    </div>
                </div>

                <style jsx>{styles}</style>
            </div>      
 )}
}

 export default withLayout(Post)