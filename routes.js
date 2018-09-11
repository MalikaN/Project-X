const routes = require('next-routes')

module.exports = routes()                          
.add('login','/login')  
.add('signup','/signup')  
.add('add-post','/add-post')  
.add('my-posts','/my-posts')   
.add('show-all', '/:category', 'show-allpost')  
.add('post', '/:slug/:customCode')    
.add('edit-post', '/:customCode','edit-post')        

