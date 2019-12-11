const User = require('../models/User')
const fs = require('fs')
const gm = require('gm').subClass({ imageMagick: true })
const generator = require('generate-password')

module.exports = {
    getAll: async (req, res) => {
        const users = await User.find({ type: 'user' })
            .sort({ createdAt: -1 } )
        res.status(200).json({ users })
    },

    getOne: async (req, res) => {
        const { userId } = req.query
        const user = await User.findOne({ _id: userId })
        res.status(200).json({ user })
    },

    currentUser: async (req, res) => {
        const user = await User.findOne({ _id: req.user.id })
        res.status(200).json({ user })
    },

    newRegister: async (req, res) => {
        let password = generator.generate({
            length: 6,
            numbers: true,
            uppercase: false
        });
        const { email } = req.body
        const user = new User({
            email,
            password,
            genPassword: password,
            type: 'user'
        })
        await user.save()
        res.status(200).json({ success: 'add new user success' })
    },

    changePassowrd: async (req, res ) => {
        const { userId, oldPassword, newPassword } = req.body
        await User.updateOne({ _id: userId }, {
            $set: {
                password: newPassword,
                genPassword: newPassword
            }
        })
        res.status(200).json({ success: 'password has been generated' })
    },

    generatePassword: async (req, res) => {
        let password = generator.generate({
            length: 6,
            numbers: true,
            uppercase: false
        });
      const { userId }  = req.body
      await User.updateOne({ _id: userId }, {
          $set: {
              password,
              genPassword: password
          }
      })
        res.status(200).json({ success: 'password has been generated' })
    },

    updateProfile: async (req, res) => {
        try {
            const {
                userId,
                fullnameLao,
                fullnameEng,
                nickname,
                phone,
                whatsapp,
                facebookLink,
                batch,
                university,
                qt1,
                qt2,
                qt3,
                qt4,
                qt5,
            } = req.body // const as object
            console.log(req.body)
            // request
            const user = await User.findOne({ _id: userId }) // find auth user
            if(req.file) { // if has file image
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
                const oldImage = 'public/' + user.image // directory older image
                await User.updateOne({ _id: userId }, // update auth
                    {$set: {
                            fullnameLao,
                            fullnameEng,
                            nickname,
                            phone,
                            whatsapp,
                            facebookLink,
                            batch,
                            university,
                            qt1,
                            qt2,
                            qt3,
                            qt4,
                            qt5,
                            image
                        }}, (err) => {
                        if(err)  return res.json({ error: err })
                    })
                await fs.exists(oldImage, (exists) => {
                    if(exists) {
                        fs.unlinkSync(oldImage)
                    }
                })
            }else{
                await User.updateOne({ _id: userId },
                    {$set: {
                           fullnameLao,
                            fullnameEng,
                            nickname,
                            phone,
                            whatsapp,
                            facebookLink,
                            batch,
                            university,
                            qt1,
                            qt2,
                            qt3,
                            qt4,
                            qt5
                    }}, (err) => {
                        if(err)  return res.json({ error: err })
                    })
            }
            res.status(200).json({ success: 'update profile successfully' })
        } catch (e) {
            throw new Error(e)
        }
    },

    delete: async (req, res) => {
        const { userId } = req.query // const { _id } from request params
        const user = await User.findOne({ _id : userId })// find this portfolio
        if(user.image) {
            const image = 'public/' + user.image // directory older image
            if(image) { // if images not null
                fs.exists(image, (exists) => { // if file exists in public
                    if(exists) {
                        fs.unlinkSync(image) // delete this file
                    }
                })
            }
        }
       await user.remove()
        res.status(200).json({ success: 'user has been deleted' })
    }
}

