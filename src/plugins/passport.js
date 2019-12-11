const passport = require('passport') // require passport
const { ExtractJwt } = require('passport-jwt') // require ExtractJWT
const JwtStrategy = require('passport-jwt').Strategy // require JWT Strategy
const LocalStrategy = require('passport-local').Strategy // require Local Strategy
const { JWT_SECRET } = require('../configuration')  // requrie secret key
const User = require('../models/User') // require User Model

// JWT STRATEGY
passport.use(  new JwtStrategy({ // Use Strategy to find token from a user ( check Auth, return user from db )
    jwtFromRequest:  ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try {
        const user = await User.findById(payload.sub)  // Find the user specified in token
        if(!user) {  // If user doesn't exists, handle it
            return done(null, false)
        }
        done(null, user)  // Otherwise, return the user
    } catch (err) {
        done(err, false)
    }
}))

// LOCAL STRATEGY
passport.use( new LocalStrategy({ // Local Strategy to check email and password is Valid ? ( SignIn )
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    try {
        const user = await User.findOne({ email })  // Find the
        // user
        // given the email' +
        if (!user) {  // If not, handle it
            return done(null, false)
        }
        const isMatch = await user.isValidPassword(password)  // Check if the password is correct
        if (!isMatch) {    //If not, handle it
            return done(null, false)
        }
        done(null, user)  // Otherwise, return the user
    } catch (err) {
        done(err, false)
    }
}))
