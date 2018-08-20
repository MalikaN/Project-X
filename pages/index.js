import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import styles from './indexStyle'
import axios from 'axios'
import Card from './cards'
import { Link } from '../routes'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronCircleRight from '@fortawesome/fontawesome-free-solid/faChevronCircleRight'



class Index extends Component{
    state={
        posts: [],
        category: []
    }

    componentDidMount(){
        axios.get('http://api.pihitak.com')
        .then((Response)=>{
            this.setState({
                posts:Response.data.Items
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
        const { posts , category } = this.state;
        const indexPage = true
        // Filter from Category
        const CFilter = posts.filter((child)=>child.CatId == 1)
        const AFilter = posts.filter((child)=>child.CatId == 2)
        const OFilter = posts.filter((child)=>child.CatId == 3)
        //sort from id in decending order
        const childrenPosts = CFilter.sort((a, b) => Number(b.id) - Number(a.id));
        const adultPosts = AFilter.sort((a, b) => Number(b.id) - Number(a.id));
        const otherPosts = OFilter.sort((a, b) => Number(b.id) - Number(a.id));
        
        return(
           
            <div className="mainDiv">     
                <div className="outerImagesDIv">
                    <div className="innerImagesDiv">
                            <img src="http://farm6.staticflickr.com/5145/5576437826_940f2db110.jpg" alt="Image 1" />
                            <img src="https://www.ybca.org/cms/2018/04/arch_des_series_2400-1440x960.jpg" alt="Image 2" />
                            <img src="https://placeimg.com/640/480/nature" alt="Image 3" />
                            <img src="http://farm2.staticflickr.com/1415/983021323_8eb2f92c01.jpg" alt="Image 4" />
                            <img src="https://i.pinimg.com/originals/11/b3/cc/11b3ccbc57526e3c6978920ef697efc5.jpg" alt="Image 5" />
                    </div>
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
                        <div>
                            <h3>Children</h3>
                        </div>
                       
                    <div>
                        <div className="cards">
                            {childrenPosts.slice(0,3).map(function(post,i){
                                    return(
                                        <Card key={post.id} post={post} index={indexPage}/> 
                                    )
                                })}  
                        </div>  
                    </div> 
                    <div className="show-all-children">
                        <Link route='show-all' params={{category:'children'}}>
                            <a className="show-all">Show all{" "}({childrenPosts.length}+)</a>
                        </Link> 
                    </div>                
                    <div>
                        <h3>Adults</h3>
                    </div>
                    <div>
                        <ul className="cards">
                            {adultPosts.slice(0,3).map(function(post,i){
                                return(
                                    <Card key={post.id} post={post} index={indexPage}/>
                                )
                            })}       
                        </ul>
                    </div>
                    <div className="show-all-children">
                        <Link route='show-all' params={{category: 'adults'}}>
                            <a className="show-all">Show all{" "}({adultPosts.length}+)</a>
                        </Link> 
                    </div>    
                    <div>
                        <h3>Other</h3>
                    </div>
                    <div>
                    <ul className="cards">
                        {otherPosts.slice(0,3).map(function(post,i){
                            return(
                                <Card key={post.id} post={post} index={indexPage}/>
                            )
                        })}       
                        </ul>
                    </div> 
                    <div className="show-all-children">
                        <Link route='show-all' params={{category: 'others'}}>
                            <a className="show-all">Show all{" "}({otherPosts.length}+)</a>
                        </Link> 
                    </div>             
                </div>
                <style jsx>{styles}</style>
            </div>
        )
    }
}

export default withLayout(Index)
