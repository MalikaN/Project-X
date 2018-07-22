import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import styles from './AddPostStyle'
import Router from 'next/router'
import jscookie from 'js-cookie'
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants'
import axios from 'axios'
import {Image, CloudinaryContext} from 'cloudinary-react'
import { parse } from 'querystring'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCamera from '@fortawesome/fontawesome-free-solid/faCamera'

class AddPost extends Component{
    state={
        loggedinUser :'',
        title:'',
        post:'',
        selectedFile:''
    }

    componentDidMount(){
        let token = jscookie.getJSON('token')
        
        if(token){
            this.setState({
                loggedinUser : token
            })
        }else{
            Router.push('/login')
        }
    }

    handleInputChange = (event) =>{
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
    }

    handleSubmit = (event) =>{
        
            const formData = new FormData();
            formData.append('file', this.state.selectedFile);
            formData.append('upload_preset', "iv3w5ot5"); // Replace the preset name with your own
            // // formData.append("api_key", "936153933364769"); // Replace API key with your own Cloudinary key
            // // formData.append("timestamp", (Date.now() / 1000) | 0);
            const config = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            };

            axios.post('https://api.cloudinary.com/v1_1/myprojectx/image/upload',formData,config)
                .then((response)=>{
                    axios.post('http://api.pihitak.com/add-post',{
                        userid: this.state.loggedinUser.userId,
                        postTitle: this.state.title,
                        post: this.state.post,
                        fileUrl:response.data.url
                    })
                    .then((response)=>{
                        if(response.data.StatusCode == 201){
                            console.log('post created successfully')  
                            this.setState({
                                title: '',
                                post: '',
                                selectedFile:''                                                              
                            })
                        }        
                    })
                    .catch(function(error){
                        console.log(error);
                    });             
                })
                .catch(function(error){
                    console.log(error);
                });
    }

    fileChangedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
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
                         By {loggedinUser.loginuser}
                    </div>
                    <div className="button" onClick ={(event)=>this.handleSubmit(event)}>Publish</div>
                </div>
                <div className="title">
                    <div className="inner-title">
                    <input type="text" name="title" value={this.state.title} placeholder="Title" 
                        className="title-text" onChange={(event)=>this.handleInputChange(event)} />
                    </div>                
                </div>
                <div className="post-details">
                    <div className="buttonDiv">
                        <button className="btn">
                            <FontAwesomeIcon icon={ faCamera }/>
                        </button>
                        <input type="file" name="myfile" className="fileupload" title="Add an image" 
                            onChange={(event)=>this.fileChangeHandler(event)}/>
                    </div>  
                    <div className="inner-post-details">
                        <textarea name="post" value={this.state.post} placeholder="your story..."  className="post-text" 
                            onChange={(event)=>this.handleInputChange(event)}/>
                    </div>
                </div>
               <style jsx>{styles}</style>
            </div>
        )
    }
}

export default withLayout(AddPost)