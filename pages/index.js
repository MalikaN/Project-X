import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import Link from 'next/link'
import styles from './indexStyle'
import axios from 'axios'
import Card from './cards'
// import SimpleSlider from '../components/Slider'
// import sliderstyles from '../components/sliderStyle'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

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
                        <a className="active button grey" href="/api/magazine/show/9987/1">Featured</a>
                        <a className="button grey" href="/api/magazine/show/9987/1">Adults</a>
                        <a className="button grey" href="/api/magazine/show/9987/1">Children</a>
                        <a className="button grey" href="/api/magazine/show/9987/1">Other</a>
                    </div>
                </div>
                <div >
                    <ul className="cards">
                        {posts.map(function(post,i){
                            return(
                                <Card key={post.postId} post={post} index={indexPage}/>
                            )
                        })}       
                        </ul>
                </div> 
                
                <style jsx>{styles}</style>
            </div>
        )
    }
}

export default withLayout(Index)
