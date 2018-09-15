import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import { Link } from '../routes'
import axios from 'axios'
import styles from './indexStyle'
import Card from './cards'

let postFilter=[]
class ShowAllPost extends Component{
    state={
        post: [],
        isLoading: true
    }
    static async getInitialProps ({query}) {
        return query
      } 
    componentDidMount(){
        axios.get('http://api.pihitak.com')
        .then((Response)=>{
            this.setState({
                post: Response.data.Items,
                isLoading: false
            })
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    render(){
        const { query } = this.props.url
        const { post, isLoading } = this.state
        const indexPage = true
        switch(query.category){
            case "children":
                postFilter = isLoading ? [1,2,3,4,5,6] : post.filter((child)=>child.CatId == 1) 
                break;
            case "adults":
                postFilter = isLoading ? [1,2,3,4,5,6] : post.filter((child)=>child.CatId == 2)
                break;
            case "others":
                postFilter = isLoading ? [1,2,3,4,5,6] : post.filter((child)=>child.CatId == 3)
                break;
            case "featured":
                postFilter = isLoading ? [1,2,3,4,5,6] : post
                break;
        }
        return(
            <div className="mainDiv">
            <div className="button-bar-overflow">
                    <div className="button-bar">
                        <Link route='show-all' params={{category:'featured'}}><a className="button grey">Featured</a></Link>
                        <Link route='show-all' params={{category: 'adults'}}><a className="button grey" >Adults</a></Link>
                        <Link route='show-all' params={{category: 'children'}}><a className="button grey" >Children</a></Link>
                        <Link route='show-all' params={{category: 'others'}}><a className="button grey" >Other</a></Link>
                    </div>
                </div>
                <div className="cardOuterDiv">
                    <div>
                        <ul className="cards">
                            {postFilter.map(function(post,i){
                                return(
                                    <Card key={post.id} post={post} index={indexPage} isLoading={isLoading}/>
                                )
                            })}       
                        </ul>
                    </div>             
                </div>
                <style jsx>{styles}</style>  
            </div>
             
        )
    }    
}

export default withLayout(ShowAllPost)