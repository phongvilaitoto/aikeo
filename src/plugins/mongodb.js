const mongoose = require('mongoose')
const uri = 'mongodb://127.0.0.1:27017/aikeo'

const connect = async () => {
    try {
        await mongoose.connect(uri, { //Connect to mongodb
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })
        console.log('Connected to', uri)
    } catch(err) {
        throw new Error(err)
    }
}

module.exports =  connect()
