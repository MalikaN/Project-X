const routes = require('next-routes')

module.exports = routes()                          
.add('login','/login')  
.add('signup','/signup')  
.add('add-post','/add-post')  
.add('my-posts','/my-posts')
.add('admin','/admin','adminpanel')
.add('edit-post', '/edit/:customCode','edit-post')        
.add('show-all', '/:category', 'show-allpost')  
.add('post', '/:slug/:customCode')    
   

