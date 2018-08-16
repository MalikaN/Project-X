const routes = require('next-routes')
                                                  // Name   Page      Pattern
module.exports = routes()    
.add('login','/login')  
.add('signup','/signup')  
.add('add-post','/add-post')  
.add('my-posts','/my-posts')     
.add('post', '/:slug/:customCode')    
.add('edit-post','/:customCode')        
.add('show-allpost', '/:category')

