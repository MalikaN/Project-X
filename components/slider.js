import styles from '../pages/indexStyle'


const Slider =({isLoading})=>{
    if (isLoading) {
        return(
            <div className="loader">
            <ul className="ul-loader">
              <li className="li-loader"></li>
              <li className="li-loader"></li>
              <li className="li-loader"></li>
              <li className="li-loader"></li>
              <li className="li-loader"></li>
            </ul>
            <style jsx>{styles}</style> 
            </div>
      )
    }
    return(
        <div className="innerImagesDiv">
            {/* <img src="http://farm6.staticflickr.com/5145/5576437826_940f2db110.jpg" alt="Image 1" />
            <img src="https://www.ybca.org/cms/2018/04/arch_des_series_2400-1440x960.jpg" alt="Image 2" />
            <img src="https://placeimg.com/640/480/nature" alt="Image 3" />
            <img src="http://farm2.staticflickr.com/1415/983021323_8eb2f92c01.jpg" alt="Image 4" />
            <img src="https://i.pinimg.com/originals/11/b3/cc/11b3ccbc57526e3c6978920ef697efc5.jpg" alt="Image 5" /> */}

             <img src="https://steemitimages.com/DQmYwer8h4PmaGkDPP5rHun3SCsLyYmutwfVZNBLYugF8DH/1.jpg" alt="Image 1" />
            <img src="https://www.todayonline.com/sites/default/files/styles/new_app_article_detail/public/23040340.JPG?itok=4ZFs6Vfs" alt="Image 2" />
            <img src="http://louderwithcrowder.com/wp-content/uploads/2015/10/DemocratsNeedYouPoor.jpg" alt="Image 3" />
            <img src="http://lifeinsurancepolicyfinder.com/wp-content/uploads/2017/03/life-insurance-for-sick-people.jpg" alt="Image 4" />
            <img src="http://www.universalmedios.com.ar/wp-content/uploads/2016/08/cuidado-anciano.jpg" alt="Image 5" />
            <style jsx>{styles}</style>
        </div>
    )
}
export default Slider