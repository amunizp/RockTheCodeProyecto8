const { uploadImage } = require('../../middleware/cloudinaryWithMulter')
const {
  getUpdates,
  createUpdate,
  updateUpdate,
  deleteUpdate
} = require('../controllers/update')

const updatesRouter = require('express').Router()

updatesRouter.get('/', getUpdates)
updatesRouter.post('/', createUpdate)
updatesRouter.put('/:id', uploadImage.single(img), updateUpdate)
updatesRouter.delete('/:id', uploadImage.single(img), deleteUpdate)

module.exports = updatesRouter
