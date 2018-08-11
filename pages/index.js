import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import Link from 'next/link'
import styles from './indexStyle'
import axios from 'axios'
import Card from './cards'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronCircleRight from '@fortawesome/fontawesome-free-solid/faChevronCircleRight'



class Index extends Component{
    state={
        posts: []
    }

    componentWillMount(){
        axios.get('http://api.pihitak.com')
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
        const childFilter = posts.filter((child)=>child.CatId == 1)
        const adultFilter = posts.filter((child)=>child.CatId == 2)
        const otherFilter = posts.filter((child)=>child.CatId == 3)

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
                        <a className="button grey" href="/posts/featured">Featured</a>
                        <a className="button grey" href="/posts/children">Adults</a>
                        <a className="button grey" href="/posts/adults">Children</a>
                        <a className="button grey" href="/posts/others">Other</a>
                    </div>
                </div>
                <div className="cardOuterDiv">
                    <div>
                        <h3>Children</h3>
                    </div>
                    <div>
                        <div className="cards">
                            {childFilter.map(function(post,i){
                                    return(
                                        <Card key={post.id} post={post} index={indexPage}/> 
                                    )
                                })}  
                        </div>
                       {/* fr<div> <FontAwesomeIcon icon={ faChevronCircleRight }/> </div> */}
                       <div>
                          <Link href=""><a>show all</a></Link> 
                        </div>  
                    </div> 
                                    
                    <div>
                        <h3>Adults</h3>
                    </div>
                    <div>
                        <ul className="cards">
                            {adultFilter.map(function(post,i){
                                return(
                                    <Card key={post.id} post={post} index={indexPage}/>
                                )
                            })}       
                        </ul>
                    </div>   
                    <div>
                        <h3>Other</h3>
                    </div>
                    <div>
                    <ul className="cards">
                        {otherFilter.map(function(post,i){
                            return(
                                <Card key={post.id} post={post} index={indexPage}/>
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

export default withLayout(Index)
