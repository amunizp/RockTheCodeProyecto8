const multer = require('multer')
const cloudinary = require('cloudinary').v2
const { CloudinaryStorage } = require('multer-storage-cloudinary')

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'reports',
    // https://cloudinary.com/documentation/folder_modes#the_39_folder_39_parameter
    //public_id: 'reports/photos'
    allowedFormats: ['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp']
  }
})
const uploadImage = multer({ storage })

module.exports = { uploadImage }
