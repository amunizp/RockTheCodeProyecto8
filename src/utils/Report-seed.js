const { default: mongoose } = require('mongoose')
const Report = require('../api/model/report')
const { reportSeed } = require('../data/reports-seed')
const connectCloudinary = require('../config/connectCoudinary')
require('dotenv').config()
const cloudinary = require('cloudinary').v2

connectCloudinary()
mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const anyReport = await Report.findOne()
    console.log(anyReport)
    if (!(anyReport === null)) {
      await Report.collection.drop()
      console.log('I deleted the Documents in Report collection')
    } else {
      console.log('No Collection of Reports to drop')
    }
    cloudinary.api
      .delete_resources_by_prefix('reports/')
      .then((result) =>
        console.log('I deleted all the reports on cloudinary', result)
      )
  })
  .catch((err) => {
    console.log(`something went wrong deleting reports ${err}`)
  })
  .then(async () => {
    await Report.insertMany(reportSeed)
    console.log('report seed inserted 🖕')
    //TODO upload some seed images
  })
  .catch((err) => {
    console.log(`Something when wrong instering ${err}`)
  })
  .finally(() => mongoose.disconnect())
