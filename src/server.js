const http = require('http')
const app = require('./app')

http.createServer(app).listen(80, () => {
    console.log('server has been created')
})
