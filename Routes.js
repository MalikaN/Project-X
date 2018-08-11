const routes = require('next-routes')

                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('post', '/post/:slug/:id', 'post')                   // user   profile   /user/:id
