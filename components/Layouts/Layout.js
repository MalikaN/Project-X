import {Component} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default(composedComponent)=>(
class Layout extends Component{
    render(){
        return(
            <div>
                <Header/>
                <composedComponent/>
                <Footer/>
            </div>
        )
    }
}
);
