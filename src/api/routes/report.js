const { uploadImage } = require('../../middleware/cloudinary')
const {
  getReports,
  createReport,
  updateReport,
  deleteReport
} = require('../controllers/report')

const reportsRouter = require('express').Router()

reportsRouter.get('/', getReports)
reportsRouter.post('/', uploadImage.fields([{ name: 'img' }]), createReport)
reportsRouter.put('/:id', updateReport)
reportsRouter.delete('/:id', deleteReport)

module.exports = reportsRouter
