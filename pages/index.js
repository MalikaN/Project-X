import {Component} from 'react'
import withLayout from '../components/Layouts/Layout'

class Index extends Component{
    render(){
        return(
        <div>
         
            <p>This is not to belittle the referenced post in any way, it is very well explained, and in my opinion more elegant than with flexbox. I just want to explain that it is as easy with flexbox as it is with grid, so that if, for whatever reason, you cannot use grid, you don't shy away from implementing it with flexbox.
            Fortunately, creating a sticky footer isn’t really all that difficult. In the following tutorial, I’ll show you a couple quick and simple methods for making a slick looking sticky footer, one that plays well with the modern web… one that deftly displays valuable information across varying screens and multiple devices. Best of all, I’ll show you how to create your footer in a relatively simple fashion in which you won’t need to mess with unnecessary libraries, fancy plugins, or less than desirable “hacks.”
            </p>        
        </div>
        )
    }
}

export default withLayout(Index)