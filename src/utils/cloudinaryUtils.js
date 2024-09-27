const cloudinary = require('cloudinary').v2

const deleteImgCloudinary = (imgUrl) => {
  const imgSplited = imgUrl.split('/')
  const folderSplited = imgSplited.at(-2)
  //const nameSplited = imgSplited.at(-1).split('.')[0]
  const nameSplited = imgSplited.pop().split('.')[0]

  const public_id = `${folderSplited}/${nameSplited}`
  cloudinary.uploader.destroy(public_id, () => {
    console.log('Image delete in cloudinary')
  })
}

// // Optimize delivery by resizing and applying auto-format and auto-quality
// const optimizeUrl = cloudinary.url('shoes', {
//   fetch_format: 'auto',
//   quality: 'auto'
// })

// console.log(optimizeUrl)

// // Transform the image: auto-crop to square aspect_ratio
// const autoCropUrl = cloudinary.url('shoes', {
//   crop: 'auto',
//   gravity: 'auto',
//   width: 500,
//   height: 500
// })

// console.log(autoCropUrl)

module.exports = { deleteImgCloudinary }
