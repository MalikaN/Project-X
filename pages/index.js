import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import Link from 'next/link'
import styles from './indexStyle'
import axios from 'axios'
import Card from './cards'

class Index extends Component{
    state={
        posts:[]
    }

    componentWillMount(){
        axios.get('http://localhost:5000/')
        .then((Response)=>{
            this.setState({
                posts:Response.data.Items
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    render(){
        const { posts } = this.state;
        const indexPage = true
        return(
            <ul className="cards">
            {posts.map(function(post,i){
                return(
                    <Card key={post.postId} post={post} index={indexPage}/>
                )
            })}       
            <style jsx>{styles}</style>
            </ul>
        )
    }
}

export default withLayout(Index)