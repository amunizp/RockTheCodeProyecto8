const { default: mongoose } = require('mongoose')

const reportSchema = new mongoose.Schema(
  {
    img: { type: String, trim: true, required: false },
    description: { type: String, required: true },
    updates: [{ type: String, ref: 'updates', required: false }],
    resolved: { type: Boolean, required: true }
  },
  {
    timestamps: true,
    collection: 'reports'
  }
)

const Report = mongoose.model('reports', reportSchema, 'reports')
module.exports = Report
