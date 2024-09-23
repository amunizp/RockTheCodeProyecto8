const cloudinary = require('cloudinary').v2
const connectCloudinary = async () => {
  try {
    // cloundinary Configuration
    cloudinary.config({
      cloud_name: process.env.cloud_name,
      api_key: process.env.api_key,
      api_secret: process.env.cloudinary_secret // Click 'View API Keys' on the online account to copy your API secret
    })
    console.log('Connected to Cloudinary ☁️')
  } catch (error) {
    console.log('Error while trying to connect to Cloundinary ☀️')
  }
}
module.exports = connectCloudinary
