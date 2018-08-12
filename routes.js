const routes = require('next-routes')
                                                  // Name   Page      Pattern
module.exports = routes()                           // ----   ----      -----
.add('post', '/:slug/:customCode')                   // user   profile   /user/:id
