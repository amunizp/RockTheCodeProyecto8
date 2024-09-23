const Report = require('../model/report')

async function getReports(req, res, next) {
  try {
    const reports = await Report.find()
    return res.status(200).json(reports)
  } catch (error) {
    return res.status(400).json('failed to get Report')
  }
}

async function createReport(req, res, next) {
  try {
    console.log('The body I found', req.body)
    const newReport = new Report(req.body)
    console.log('The report I saved', newReport)
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
    const reportUpdates = new Report(req.body)
    reportUpdates._id = id
    const reportToUpdate = await Report.findByIdAndUpdate(id, reportUpdates, {
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
    const reportDeleted = await Report.findByIdAndDelete(id)
    return res.status(200).json(reportDeleted)
  } catch (error) {
    return res
      .status(400)
      .json({ message: 'failed to Delete report', error: error.message })
  }
}

module.exports = { getReports, createReport, updateReport, deleteReport }
