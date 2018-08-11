const routes = require('next-routes')

                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('post', '/post/:slug', 'post')                   // user   profile   /user/:id
