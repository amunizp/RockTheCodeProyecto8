const { uploadImage } = require('../../middleware/cloudinaryWithMulter')
const {
  getReports,
  createReport,
  updateReport,
  deleteReport,
  getReportByid
} = require('../controllers/report')

const reportsRouter = require('express').Router()

reportsRouter.get('/', getReports)
reportsRouter.get('/:id', getReportByid)
reportsRouter.post('/', uploadImage.single('img'), createReport)
reportsRouter.put('/:id', uploadImage.single('img'), updateReport)
reportsRouter.delete('/:id', deleteReport)

module.exports = reportsRouter
