const routes = require('next-routes')
                                                  // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('post', '/:slug/:customCode')   
.add('my-posts')                // user   profile   /user/:id
