import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'
import { Link } from '../routes'

class ShowAllPost extends Component{
    static async getInitialProps ({query}) {
        return query
      }
    render(){
        console.log(this.props.url.query)
        return(
            <div>hello all post</div>
        )
    }    
}

export default withLayout(ShowAllPost)