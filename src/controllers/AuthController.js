const JWT = require('jsonwebtoken') // require JWT
const { JWT_SECRET } = require('../configuration') // require secret key
const User = require('../models/User')
const generator = require('generate-password')
const gm = require('gm').subClass({ imageMagick: true })

signToken = user => {
    return JWT.sign({   // Generate Token
        iss: JWT_SECRET,// secret code to generateToken
        sub: user.id,   // user.id or user._id
        iat: new Date().getTime(),  // Current time
        exp: new Date().setDate(new Date().getDate() + 1) // Current time + 1 Day
    }, JWT_SECRET) // secret key
}

module.exports = {
    signUp:async (req, res) => {
        const user = req.body // request from form user
        /// Reisize
        let width = 600
        let height = 600
        await gm(req.file.path)
            .resize(width, height)
            .gravity('Center')
            .noProfile()
            .write(req.file.path ,(err) => { // write a new file
                if(err) return
            })
        // Update Profile
        const image = 'uploads/profile/' + req.file.filename // save new path to mongodb
        const unique = await User.findOne({  email: user.email }) // Check Unique username || email
        if(unique) { // Protect but i have another one
            return res.status(403).json({ error: 'username | email has been use is already in use' })
        }
        const newUser = new User({  // Create a new user
            email: user.email,
            password: user.password,
            genPassword: user.password,
            image,
            fullnameLao: user.fullnameEng,
            fullnameEng: user.fullnameEng,
            nickname: user.nickname,
            phone: user.phone,
            whatsapp: user.whatsapp,
            facebookLink: user.facebookLink,
            batch: user.batch,
            university: user.university,
            qt1: user.qt1,
            qt2: user.qt2,
            qt3: user.qt3,
            qt4: user.qt4,
            qt5: user.qt5,
            type: 'user',
        })
        await newUser.save() // save and use Hash in save function
        const token = signToken(newUser) // Generate the token
        res.status(200).json({ token }) // return a token
    },
    signIn: async (req, res) => {
        const token = signToken(req.user)  // Generate token after loggedIn // req.user is req current user
        res.status(200).json({ token }) // return a token
    },

    import: async (req, res) => {
        const users = req.body
        users.forEach( async (user) => {
            let password = generator.generate({
                length: 6,
                numbers: true,
                uppercase: false
            });
            const unique = await User.findOne({ email: user.email }) // Check Unique username || email
            if(unique) { // Protect but i have another one
                return res.status(403).json({ error: 'email has been use is already in use' })
            }
            const newUser = new User({  // Create a new user
                email: user.email,
                password,
                genPassword: password,
                fullnameLao: user.fullnameEng,
                fullnameEng: user.fullnameEng,
                nickname: user.nickname,
                phone: user.phone,
                whatsapp: user.whatsapp,
                facebookLink: user.facebookLink,
                batch: user.batch,
                university: user.university,
                qt1: user.qt1,
                qt2: user.qt2,
                qt3: user.qt3,
                qt4: user.qt4,
                qt5: user.qt5,
                type: 'user',
            })
            await newUser.save() // save and use Hash in save function
        })
    }
}
