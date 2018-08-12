const routes = require('next-routes')

                                                    // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('post', '/:slug/:id')                   // user   profile   /user/:id
