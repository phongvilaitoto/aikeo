const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs')
const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true
    },
    password: String,
    genPassword: String,
    fullnameLao: String,
    fullnameEng: String,
    nickname: String,
    phone: String,
    whatsapp: String,
    facebookLink: String,
    batch: String,
    university: String,
    qt1: String,
    qt2: String,
    qt3: String,
    qt4: String,
    qt5: String,
    image: String,
    type: {
        type: String,
        enum: ['admin', 'user']
    }
},  { autoIndex: true, timestamps: true, versionKey: false })

userSchema.pre('save', async function (next) { // Pre save() + hash
    try {
        const salt = await bcrypt.genSalt(10)  // Generate a salt
        // Generate a password hash ( salt, hash )
        this.password = await bcrypt.hash(this.password, salt)  // Re-assign hashed version over original, plain text password
        next()
    } catch (err) {
        throw new Error(err)
    }
})

userSchema.pre('updateOne', async function (next) { // Pre save() + hash
    const password = this.getUpdate().$set.password;
    if (!password) {
        return next();
    }
    try {
        const salt = bcrypt.genSaltSync();
        const hash = bcrypt.hashSync(password, salt);
        this.getUpdate().$set.password = hash;
        next();
    } catch (error) {
        return next(error);
    }
})

userSchema.methods.isValidPassword = async function (newPassword) { // Check isValidPassword
    try {
        return await bcrypt.compare(newPassword, this.password) // compare password & hash
    } catch(err) {
        throw new Error(err)
    }
}

const User = mongoose.model('users', userSchema)

module.exports = User
