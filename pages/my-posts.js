import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import styles from './myPostStyle'
import Link from 'next/link'
import jscookie from 'js-cookie'
import axios from 'axios'
import Card from './cards'


class myPost extends Component{

    state={
        LogginUser:'',
        posts:[]
    }

    componentWillMount(){
        let token = jscookie.getJSON('token')

        if(token){
            this.setState({
                LogginUser:token
            },()=>{
                if(this.state.LogginUser){
                    this.fetchAPI()
                }
            })
        }
    }

    fetchAPI(){
        axios.post('http://localhost:5000/my-post',{
            userid:this.state.LogginUser.userId
        })
        .then((Response)=>{
            this.setState({
                posts:Response.data.Items
            })
        })
        .catch(function(error){
            console.log(error);
        })
    }

    render(){
        const { posts } = this.state;
        const indexPage = false;
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

export default withLayout(myPost)