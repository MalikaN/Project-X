import {Component} from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Head from 'next/head'

export default(ComposedComponent)=>(
class Layout extends Component{
    render(){
        return(
            <div className="flex-container">
               <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
          
                <Header/>
                <div className="content"><ComposedComponent/></div>
                <Footer/>
                <style jsx>{`
                    .flex-container {
                        display: flex;
                        flex-direction: column;
                        height:100vh;
                      }
                    .content{
                         flex: 1;
                     }   
                    
                `}</style>
                  <style jsx global>{`
            body { 
                background-color: #F9FAFB;
                background:linear-gradient(to top, #F9FAFB 0%, #FFFFFF 100%);
                margin:0;
               font-family: 'Quicksand', sans-serif;
            }
           
            `}</style>
            </div>
        )
    }
}
);
