const express = require('express')
const router = express.Router()

const passport = require('passport')
const passportConf = require('../../plugins/passport')

const passportSignIn = passport.authenticate('local', { session: false } ) // check SignIn

const upload = require('../../plugins/multer')

const AuthController = require('../../controllers/AuthController')

router.route('/signup')
    .post(upload.single('image') ,AuthController.signUp)


router.route('/signin')
    .post(passportSignIn, AuthController.signIn)

router.route('/import-users-json')
    .post(AuthController.import)

module.exports = router
