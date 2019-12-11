const multer = require('multer')

// Storage path & filename
const storage = multer.diskStorage({
    destination: (req, file, done) => {
        done(null, 'public/uploads/profile')
    },
    filename: (req, file, done) => {
        const originalExtension = file.originalname.substring(file.originalname.indexOf('.')+1)
        done(null, Date.now() + '.' +  originalExtension)
    }
})

// Filter JPEG || PNG
const fileFilter = (req, file, done) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
        done(null, true)
    }
    else {
        done(null, false)
    }
}

// const upload & limit size
const upload = multer({
    storage,
    limit: {
        fileSize: 1024*1024 * 5
    },
    fileFilter
})

// Export upload
module.exports = upload
