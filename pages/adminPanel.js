import { Component } from 'react'
import withLayout from '../components/Layouts/Layout'
import Card from './cards'
import styles from './indexStyle'
import axios from 'axios'
import Table from '../components/adminTable'

class Admin extends Component{
    state={
        posts: [],
        isLoading: true
    }

    componentDidMount(){
       axios.get('http://api.pihitak.com')
       .then((response)=>{
            this.setState({
                posts: response.data.Items,
                isLoading: false
            })
       })
       .catch((error)=>{
           console.log(error)
       })
    }

    render(){
        const { post,isLoading,posts } =this.state;
        const indexPage = true
        return(
            
            <div className="quiz-window">
            <div className="quiz-window-body">
            {/* <div className="gui-window-awards"> */}
            <ul className="guiz-awards-row-header guiz-awards-header">
                <li className="guiz-awards-header-star">&nbsp;</li>
                <li className="guiz-awards-header-title">Title</li>
                <li className="guiz-awards-header-track">Description</li>
                <li className="guiz-awards-header-time"></li>
            </ul>
                {posts.map(function(post,i){
                    return(
                        <Table post={post}/>
                    )
                    
                })}  
                {/* </div>  */}
                </div>     
                    <style jsx>{styles}</style>
                </div>
        )
    }
}

export default withLayout(Admin)