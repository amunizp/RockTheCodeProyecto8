const Update = require('../model/update')

async function getUpdates(req, res, next) {
  try {
    const updates = await Update.find()
    return res.status(200).json(updates)
  } catch (error) {
    return res.status(400).json('failed to get Update')
  }
}

async function createUpdate(req, res, next) {
  try {
    console.log('The body I found', req.body)
    const newUpdate = new Update(req.body)
    console.log('The update I saved', newUpdate)
    const createdUpdate = await newUpdate.save()
    return res.status(200).json(createdUpdate)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'failed to create a Update', error: error.message })
  }
}
async function updateUpdate(req, res, next) {
  try {
    const { id } = req.params
    console.log('req body is ', req.body)
    const newUpdate = new Update(req.body)
    newUpdate._id = id

    if (req.file) {
      newUpdate.img = req.files.img.path
      console.log('found an image, linking it')
    }
    const updateToUpdate = await Update.findByIdAndUpdate(id, newUpdate, {
      new: true
    })
    console.log(
      'the update we are updating is: ',
      newUpdate.description,
      newUpdate._id,
      newUpdate.img,
      req.body
    )
    console.log('we updated the update', updateToUpdate)
    return res.status(200).json(updateToUpdate)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'failed to update update', error: error.message })
  }
}

async function deleteUpdate(req, res, next) {
  try {
    const { id } = req.params
    const updateDeleted = await Update.findById(id)
    if (!(updateDeleted.img === null || updateDeleted.img === undefined)) {
      deleteImgCloudinary(updateDeleted.img)
      console.log('I called to get the file deleted from cloudinary')
    }
    //only delete after we confirmed cloudinary storage was deleted
    await Update.findByIdAndDelete(id)
    return res.status(200).json(updateDeleted)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'failed to Delete update', error: error.message })
  }
}

module.exports = { getUpdates, createUpdate, updateUpdate, deleteUpdate }
