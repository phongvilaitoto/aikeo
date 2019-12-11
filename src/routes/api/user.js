const express = require('express')
const router = express.Router()
const UserController = require('../../controllers/UserController')
const upload  = require('../../plugins/multer')

const passport = require('passport')
const passportConf = require('../../plugins/passport')
const passportJWT =  passport.authenticate('jwt', { session: false }) // check Auth

router.route('/get-all')
    .get(UserController.getAll)

router.route('/get-one')
    .get(UserController.getOne)


router.route('/current-user')
    .get(passportJWT, UserController.currentUser)

router.route('/change-password')
    .put(UserController.changePassowrd)

router.route('/generate-password')
    .put(UserController.generatePassword)

router.route('/new-register')
    .post(UserController.newRegister)

router.route('/update-profile')
    .put(upload.single('image'), UserController.updateProfile)

router.route('/delete-user')
    .delete(UserController.delete)

module.exports = router
