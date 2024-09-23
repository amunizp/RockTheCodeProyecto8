const { default: mongoose } = require('mongoose')

const updateSchema = new mongoose.Schema(
  {
    img: [{ type: String, required: false }],
    description: { type: String, required: true }
  },
  {
    timestamps: true,
    collection: 'updates'
  }
)

const Update = mongoose.model('updates', updateSchema, 'updates')
module.exports = Update
