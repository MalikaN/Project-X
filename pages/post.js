import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'

const Post = (props) =>{
    console.log(props.url)
    return(
        <div>
            {/* //{props.router.pathname} */}
            {/* {props.query.id} */}
            fsdf
        </div>
 )
}

 export default withLayout(Post)