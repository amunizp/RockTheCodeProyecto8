const { deleteImgCloudinary } = require('../../utils/cloudinaryUtils')
const Report = require('../model/report')

async function getReports(req, res, next) {
  try {
    const reports = await Report.find()
    return res.status(200).json(reports)
  } catch (error) {
    return res.status(400).json('failed to get All Reports')
  }
}
async function getReportByid(req, res, next) {
  try {
    const { id } = req.params
    const report = await Report.findById(id).populate('updates')
    return res.status(200).json(report)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'failed to get this Report', error: error.message })
  }
}

async function createReport(req, res, next) {
  try {
    const newReport = new Report(req.body)
    if (req.file) {
      newReport.img = req.file.path
    }
    const createdReport = await newReport.save()
    return res.status(200).json(createdReport)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'failed to create a Report', error: error.message })
  }
}
async function updateReport(req, res, next) {
  try {
    const { id } = req.params
    const reportOld = await Report.findById(id)
    const reportUpdated = new Report(req.body)
    reportUpdated._id = id
    reportUpdated.updates = [
      ...new Set([...reportOld.updates, req.body.updates])
    ]
    if (req.file) {
      img: req.file.path
    }
    const reportToUpdate = await Report.findByIdAndUpdate(id, reportUpdated, {
      new: true
    })

    return res.status(200).json(reportToUpdate)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'failed to update report', error: error.message })
  }
}

async function deleteReport(req, res, next) {
  try {
    const { id } = req.params
    const reportDeleted = await Report.findById(id)
    if (!(reportDeleted.img === null || reportDeleted.img === undefined)) {
      deleteImgCloudinary(reportDeleted.img)
      console.log('I called to get the file deleted from cloudinary')
    }
    //only delete after we confirmed cloudinary storage was deleted
    await Report.findByIdAndDelete(id)
    return res.status(200).json({
      mensaje: 'Elemento eliminado',
      reportDeleted
    })
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'failed to Delete report', error: error.message })
  }
}

module.exports = {
  getReports,
  createReport,
  updateReport,
  deleteReport,
  getReportByid
}
