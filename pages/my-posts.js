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
        posts:[],
        isLoading: true
    }

    componentDidMount(){
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
        axios.get('http://api.pihitak.com/my-post',{
            params:{
                userid:this.state.LogginUser.userId
            }
        })
        .then((Response)=>{
            this.setState({
                posts:Response.data.Items,
                isLoading: false
            })
        })
        .catch(function(error){
            console.log(error);
        })
    }

    render(){
        const { posts,isLoading } = this.state;
        const indexPage = false;
        const myPosts= isLoading ? [1,2,3,4,5,6] : posts
        
        return(
            <ul className="mypostcards">
            {myPosts.map(function(post,i){
                return(                   
                    <Card key={post.postId} post={post} index={indexPage} isLoading={isLoading}/>
                )
            })}       
            <style jsx>{styles}</style>
            </ul>
        )
    }
}

export default withLayout(myPost)