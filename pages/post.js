import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import posts from '../components/Posts'

const Post = (props) =>{
    let details = posts.filter(post => post.id === props.url.query.id)
    console.log("DETAILS",details)
    console.log("POST",posts)
    return(
        <div>
            {details.id}
            {details.body}
        </div>
 )
}

 export default withLayout(Post)