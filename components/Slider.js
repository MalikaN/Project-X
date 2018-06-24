import React,{Component} from 'react'
// import styles from './sliderStyle'
import Slider from 'react-slick'

class SimpleSlider extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
        <Slider {...settings}>
        <div>
            <img src="http://montgomeryrv.com/wp-content/uploads/2014/03/cropped-montogomery.jpg"/>
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/8a/c9/c0/8ac9c04ef410b3435248a24a0c81186a.jpg"/>
          </div>
          <div>
            <img src="http://speakcomfort.com/wp-content/uploads/2017/09/1500-x-450-drop.jpg"/>
          </div>
          <div>
            <img src="https://i.pinimg.com/originals/8a/c9/c0/8ac9c04ef410b3435248a24a0c81186a.jpg"/>
          </div>
          <div>
            <img src="http://sonrisemountainranch.org/wp-content/uploads/2014/04/cropped-cimarron-sunset1.jpeg"/>
          </div>
          <div>
            <img src="http://speakcomfort.com/wp-content/uploads/2017/09/1500-x-450-drop.jpg"/>
          </div>  
        </Slider>
        
      </div>
        // <Slider {...settings}>
        // <div><img src="http://placekitten.com/g/200/300"/></div>
        // <div><img src="http://placekitten.com/g/200/300"/></div>
        // <div><img src="http://placekitten.com/g/200/300"/></div>
        // </Slider>
      
      );
    }
  }

  export default SimpleSlider