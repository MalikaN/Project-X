import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import styles from './indexStyle'
import axios from 'axios'
import Card from './cards'
import { Link } from '../routes'
import Slider from '../components/slider'

class Index extends Component{
    state={
        posts: [],
        category: [],
        isLoading: true
    }

    componentDidMount(){
        axios.get('http://api.pihitak.com')
        .then((Response)=>{
            
            this.setState({
                posts:Response.data.Items,
                isLoading: false
            })
        })
        .catch((error)=>{
            console.log(error);
        })

        axios.get('http://api.pihitak.com/get-post-category')    
        .then((Response)=>{
            this.setState({
                category: Response.data.category
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }
 
    
    render(){
        const { posts , category, isLoading} = this.state;
        const indexPage = true
        // Filter from Category
        const CFilter = posts.filter((child)=>(child.CatId == 1 && child.Published=='Approved'))
        const AFilter = posts.filter((adult)=>(adult.CatId == 2 && adult.Published=='Approved'))
        const OFilter = posts.filter((other)=>(other.CatId == 3 && other.Published=='Approved'))
       // sort from id in decending order
        /*const childrenPosts = CFilter.sort((a, b) => Number(b.id) - Number(a.id));
        const adultPosts = AFilter.sort((a, b) => Number(b.id) - Number(a.id));
        const otherPosts = OFilter.sort((a, b) => Number(b.id) - Number(a.id));*/
        const childrenPosts = isLoading
            ? [1,2,3]
            : CFilter.sort((a, b) => Number(b.id) - Number(a.id));
        const adultPosts = isLoading
            ? [1,2,3]
            : AFilter.sort((a, b) => Number(b.id) - Number(a.id));
        const otherPosts = isLoading
            ? [1,2,3]
            : OFilter.sort((a, b) => Number(b.id) - Number(a.id));
        
        return(
            
            <div className="mainDiv">
            
                <div className="outerImagesDIv">
                    <Slider isLoading={isLoading}/>
                </div>
                <div className="button-bar-overflow">
                    <div className="button-bar">
                        <Link route='show-all' params={{category:'featured'}}><a className="button grey">Featured</a></Link>
                        <Link route='show-all' params={{category: 'adults'}}><a className="button grey" >Adults</a></Link>
                        <Link route='show-all' params={{category: 'children'}}><a className="button grey" >Children</a></Link>
                        <Link route='show-all' params={{category: 'others'}}><a className="button grey" >Other</a></Link>
                    </div>
                </div>
                <div className="cardOuterDiv">
                        <div className="heading">
                            <div className="inner-header">
                                <h3>Children</h3>
                            </div>
                        </div>
                       
                    <div>
                        <div className="cards">
                            {childrenPosts.slice(0,3).map(function(post,i){
                                    return(
                                        <Card post={post} index={indexPage} isLoading={isLoading}/> 
                                    )
                                })}  
                        </div>  
                    </div> 
                    <div className="show-all-children">
                        <Link route='show-all' params={{category:'children'}}>
                            <a className="show-all">See more{" "}({childrenPosts.length}+){" "}</a>
                        </Link> 
                    </div>                
                    <div className="heading">
                        <div className="inner-header">
                            <h3>Adults</h3>
                        </div>
                    </div>
                    <div>
                        <ul className="cards">
                            {adultPosts.slice(0,3).map(function(post,i){
                                return(
                                    <Card post={post} index={indexPage} isLoading={isLoading}/>
                                )
                            })}       
                        </ul>
                    </div>
                    <div className="show-all-children">
                        <Link route='show-all' params={{category: 'adults'}}>
                            <a className="show-all">See more{" "}({adultPosts.length}+){" "}</a>
                        </Link> 
                    </div>    
                    <div className="heading">
                        <div className="inner-header">
                            <h3>Other</h3>
                        </div>
                    </div>
                    <div>
                    <ul className="cards">
                        {otherPosts.slice(0,3).map(function(post,i){
                            return(
                                <Card post={post} index={indexPage} isLoading={isLoading}/>
                            )
                        })}       
                        </ul>
                    </div> 
                    <div className="show-all-children">
                        <Link route='show-all' params={{category: 'others'}}>
                            <a className="show-all">See more{" "}({otherPosts.length}+){" "}</a>
                        </Link> 
                    </div>             
                </div>
                <style jsx>{styles}</style>
            </div>
        )
    }
}

export default withLayout(Index)
