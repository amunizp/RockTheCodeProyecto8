const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'reports',
    allowedFormats: ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp']
  }
})
const uploadImage = multer({ storage })

module.exports = { uploadImage }
