import {Component} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Head from 'next/head'
import styles from './Layoutstyle'

export default(ComposedComponent)=>(
class Layout extends Component{
    render(){
        return(
            <div className="flex-container">  
                <Header/>
                <div className="content">
                    <ComposedComponent {...this.props}/>
                </div>
                <Footer/>
                <style jsx>{styles}</style>
                <style jsx global>{`
                body { 
                    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif !important;
                    background-color: #FFF;
                    margin:0; 
                    // color : rgb(72, 72, 72) !important;        
                }
                `}</style>
            </div>
        )
    }
}
);
