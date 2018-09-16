import styles from '../pages/indexStyle'
import {Link} from '../routes'

let Star=""
const Table =({post})=>{
    const starClass = () => {
        switch (post.Category) {
            case 'Children':
                return 'goldstar';
                break;

            case 'Adults':
                return 'silverstar';
                break;

            case 'Others':
                return 'bronzestar';
                break;
        }
    };
    const cat = ()=>{
        switch (post.Category) {
            case 'Children':
                return 'C';
                break;

            case 'Adults':
                return 'A';
                break;

            case 'Others':
                return 'O';
                break;
        }
    }
    return(
            <ul className="guiz-awards-row ">        
            <li className="guiz-awards-star">
                <span className={`star ${starClass()}`}>
                    <span className="star-text">{cat()}</span>
                </span>
                
            </li>
              <li className="guiz-awards-title">{post.postTitle}
                {/* <div className="guiz-awards-subtitle"></div> */}
              </li>
              <li className="guiz-awards-track">{post.PostDesc}</li>
              <li className="guiz-awards-time">
                <Link route='edit-post' params={{customCode:post.CustomCode}}>
                    <a>View</a>
                </Link>
              </li>
              <style jsx>{styles}</style>
            </ul>
          /* <div className="guiz-awards-buttons"><button className="guiz-awards-but-back"><i className="fa fa-angle-left"></i> Back</button></div> */
       
    )
}
export default Table