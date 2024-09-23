const {
  getUpdates,
  createUpdate,
  updateUpdate,
  deleteUpdate
} = require('../controllers/update')

const updatesRouter = require('express').Router()

updatesRouter.get('/', getUpdates)
updatesRouter.post('/', createUpdate)
updatesRouter.put('/:id', updateUpdate)
updatesRouter.delete('/:id', deleteUpdate)

module.exports = updatesRouter
