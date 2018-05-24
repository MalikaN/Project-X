import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import styles from './AddPostStyle'
import jscookie from 'js-cookie'
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants';

class AddPost extends Component{
    state={
        loggedinUser :''
    }

    componentDidMount(){
        this.setState({
            loggedinUser : jscookie.get('loginuser')
        })

    }

    render(){
        const { loggedinUser } = this.state;
        return(
            <div className="container">
                <div className="status-bar">
                    <div className="inner-status-bar">
                        Tell us your Story
                    </div>
                </div>
                <div className="author-pane">
                    <div className="inner-author-pane">
                         By {loggedinUser}
                    </div>
                </div>
                <div className="title">
                    <div className="inner-title">
                    <input type="text" name="title" placeholder="Title" className="title-text" />
                    </div>                
                </div>
                <div className="post-details">
                    <div className="inner-post-details">
                        <input type="textarea" name="post" placeholder="your story..." className="post-text"/>
                    </div>
                </div>
               <style jsx>{styles}</style>
            </div>
        )
    }
}

export default withLayout(AddPost)