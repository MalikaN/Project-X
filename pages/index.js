import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import Link from 'next/link'
import styles from './indexStyle'
import axios from 'axios'
import Card from './cards'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faChevronCircleRight from '@fortawesome/fontawesome-free-solid/faChevronCircleRight'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import CrossfadeImage from '../index.js'


class Index extends Component{
    state={
        posts: [],
        imageIndex: 0,
        images: [
            "http://farm6.staticflickr.com/5145/5576437826_940f2db110.jpg",
            "https://www.ybca.org/cms/2018/04/arch_des_series_2400-1440x960.jpg",
            "https://placeimg.com/640/480/nature"
          ]
    }

    changeImage() {
        if (this.state.imageIndex === images.length - 1) {
          this.setState({ imageIndex: 0 });
        } else {
          this.setState({ imageIndex: this.state.imageIndex + 1 });
        }
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
        const childFilter = posts.filter((child)=>child.CatId == 1)
        const adultFilter = posts.filter((child)=>child.CatId == 2)
        const otherFilter = posts.filter((child)=>child.CatId == 3)

        return(
            <div className="mainDiv">     
                <div className="outerImagesDIv">
                <div>
                        <img className="innerImagesDiv" src="http://farm6.staticflickr.com/5145/5576437826_940f2db110.jpg" alt="Image 1" />
                        <img className="innerImagesDiv" src="https://www.ybca.org/cms/2018/04/arch_des_series_2400-1440x960.jpg" alt="Image 2" />
                        <img className="innerImagesDiv" src="https://placeimg.com/640/480/nature" alt="Image 3" />
                        <img className="innerImagesDiv" src="http://farm2.staticflickr.com/1415/983021323_8eb2f92c01.jpg" alt="Image 4" />
                        <img className="innerImagesDiv" src="https://i.pinimg.com/originals/11/b3/cc/11b3ccbc57526e3c6978920ef697efc5.jpg" alt="Image 5" />
                </div>
                </div>
                <div className="button-bar-overflow">
                    <div className="button-bar">
                        <a className="active button grey" href="/posts/featured">Featured</a>
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
                                        <Card key={post.postId} post={post} index={indexPage}/> 
                                    )
                                })}  
                               
                        </div>
                       {/* fr<div> <FontAwesomeIcon icon={ faChevronCircleRight }/> </div> */}
                    </div>  
                    
                    <div>
                        <h3>Adults</h3>
                    </div>
                    <div>
                    <ul className="cards">
                        {adultFilter.map(function(post,i){
                            return(
                                <Card key={post.postId} post={post} index={indexPage}/>
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
                                <Card key={post.postId} post={post} index={indexPage}/>
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
