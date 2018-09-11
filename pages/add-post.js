import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import styles from './AddPostStyle'
import Router from 'next/router'
import jscookie from 'js-cookie'
import axios from 'axios'
import {Image, CloudinaryContext} from 'cloudinary-react'
import { parse } from 'querystring'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faCamera from '@fortawesome/fontawesome-free-solid/faCamera'
import randomstring from 'randomstring'

let rString=''
class AddPost extends Component{
    state={
        loggedinUser: '',
        title: '',
        post: '',
        selectedFile: '',
        category: [],
        checkedCat: ''
    }
    componentWillMount(){
       
        axios.get('http://api.pihitak.com/get-post-category')
        .then((Response)=>{
            this.setState({
                category: Response.data.category
            })
        })
        .catch((error)=>{
            console.log(error);
        })
     
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
    createRandomString=()=>{
       
        const { checkedCat } =this.state
        switch(checkedCat){
            case "1":
                rString = 'C'+ randomstring.generate(7)
                break;
            
            case "2":
                rString = 'A'+ randomstring.generate(7)
                break;
            
            case "3":
                rString = 'O'+ randomstring.generate(7)
                break;
            
        }
    }
    handleSubmit = (event) =>{
        
            const { title, loggedinUser, post, checkedCat } = this.state;
            const formData = new FormData();
            formData.append('file', this.state.selectedFile);
            formData.append('upload_preset', "iv3w5ot5"); // Replace the preset name with your own
            // // formData.append("api_key", "936153933364769"); // Replace API key with your own Cloudinary key
            // // formData.append("timestamp", (Date.now() / 1000) | 0);
            const config = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            };
            this.createRandomString()
            const slug = title.replace(/\s+/g, '-').toLowerCase();
            axios.post('https://api.cloudinary.com/v1_1/myprojectx/image/upload',formData,config)
                .then((response)=>{
                   
                    axios.post('http://api.pihitak.com/add-post',{
                        userid: loggedinUser.userId,
                        postTitle: title,
                        post: post,
                        fileUrl:response.data.url,
                        catId: checkedCat,
                        customId:rString,
                        slug: slug

                    })
                    .then((response)=>{
                        if(response.data.StatusCode == 201){
                            console.log('post created successfully')  
                            this.setState({
                                title: '',
                                post: '',
                                selectedFile: '',
                                checkedCat: ''                                                              
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

    fileChangeHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        })
       
    }

    categoryChange = (event) =>{
        this.setState({
            checkedCat: event.target.value
        })
       
    }

    render(){
        const { loggedinUser , category, checkedCat } = this.state;

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
                <div className="post-category">
                    {category.slice(0,3).map((cat,i)=>{
                        return(
                            <div key={cat.catId}>
                            <input type="radio" name="category" value={cat.catId} className="radioinput" checked={checkedCat==cat.catId} onChange={this.categoryChange}/>
                            <label className="post-label">
                            {cat.Category}
                            </label>
                            </div>
                        )
                    })}   
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
                        <textarea name="post" value={this.state.post} placeholder="your story..."
                            onChange={(event)=>this.handleInputChange(event)}/>
                    </div>
                </div>
               <style jsx>{styles}</style>
            </div>
        )
    }
}

export default withLayout(AddPost)