const proxy = require('http-proxy-middleware')
 
module.exports = function(app) {
    app.use(proxy('/api/*', { target: 'http://localhost:5000' }))
    app.use(proxy('/uploads/*', { target: 'http://localhost:5000' }))
    app.use(proxy('/logout', { target: 'http://localhost:5000' }))
}