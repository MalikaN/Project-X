import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import jscookie from 'js-cookie'
import Router from 'next/router'
import styles from './AddPostStyle'

class AddPost extends Component{

    componentDidMount(){
        let cookie = jscookie.get('token')

        if(!cookie){
            Router.push('/login')
        }
    }

    render(){
        return(
            <div className="container">
                <div className="status-bar">
                    <div className="inner-status-bar">
                        Tell us your Story
                    </div>
                </div>
                <div className="author-pane">
                    <div className="inner-author-pane">
                        by Malika
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