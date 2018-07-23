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
            <Head>
                    <title>Project X</title>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
                <Header/>
                <div className="content">
                    <ComposedComponent {...this.props}/>
                </div>
                <Footer/>
                <style jsx>{styles}</style>
                <style jsx global>{`
                body { 
                    font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
                    background-color: #FFF;
                    margin: 0; 
                    color: #333;//#484848;
                }
                `}</style>
            </div>
        )
    }
}
);
