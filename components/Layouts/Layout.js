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
                    <title>Pihitak</title>
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
                    // font-family: Circular,"Helvetica Neue",Helvetica,Arial,sans-serif;
                   // font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
                   font-family: Camphor,Open Sans,Segoe UI,sans-serif;
                   -webkit-font-smoothing: antialiased;
                    background-color: #FEFEFE; //#FFF;
                    margin: 0; 
                    color: rgb(72, 72, 72);//#333;//#484848;
                }
                input{
                    font : 30px Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif;
                    color: rgb(72,72,72);
                }
                a{
                    // background-color: #00BAF4;
                    color: #2e86de;
                    text-decoration: none;
                }
                button{
                    background-color: #00BAF4;
                }
                textarea{
                    width: 100%;
                    border-style: none; 
                    border-color: Transparent; 
                    overflow: auto; 
                    font-size: 24px;
                    width: 100%;
                    border-style: none; 
                    border-color: Transparent; 
                    overflow: auto; 
                    resize: vertical;
                    max-height: 300px; 
                    min-height: 200px;
                }
                `}</style>
            </div>
        )
    }
}
);
