const http = require('http')
const app = require('./app')
const port = 98;


app.get('*', (req, res) => {
    // none www
    if (req.headers.host.match(/^www\./)) {
        res.redirect({ "Location": "https://" + req.headers['host'] + req.url }, 301 )
    }
    res.render('index.ejs')
})

http.createServer(app).listen(port, () => {
    console.log(`server has been created at port ${port}`)
})
