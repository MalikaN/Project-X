import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import styles from './AddPostStyle'
import Router from 'next/router'
import jscookie from 'js-cookie'
import { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } from 'constants'
import axios from 'axios'
import {Image, CloudinaryContext} from 'cloudinary-react'

const CLOUDINARY_UPLOAD_PRESET = 'j2iqzuah';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/react-cloudinary/upload';
class AddPost extends Component{
    state={
        loggedinUser :{},
        title:'',
        post:'',
        selectedFile: ''
    }

    componentDidMount(){
        this.setState({
            loggedinUser : JSON.parse(jscookie.get('token') || '{}')
        })
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
        const formData = new FormData()
        formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
        axios.post('http://localhost:5000/add-post',{
            userid: this.state.loggedinUser.userId,
            postTitle: this.state.title,
            post: this.state.post,
            file:formData
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
                    <input type="text" name="title" value={this.state.title} placeholder="Title" className="title-text" onChange={(event)=>this.handleInputChange(event)} />
                    </div>                
                </div>
                <div className="post-details">
                    <div className="inner-post-details">
                        <input type="textarea" name="post" value={this.state.post} rows="10" cols="30" placeholder="your story..." className="post-text" onChange={(event)=>this.handleInputChange(event)}/>
                    </div>
                </div>
                <div>
                    <input type="file" onChange={this.fileChangedHandler}/>
                </div>
               <style jsx>{styles}</style>
            </div>
        )
    }
}

export default withLayout(AddPost)