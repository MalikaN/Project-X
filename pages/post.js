import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import posts from '../components/Posts'
import styles from './postStyle'

class Post extends Component{
    constructor(props){
        super(props);
        this.state = {
            details : posts.filter(post => post.id == props.url.query.id)
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