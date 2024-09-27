const { default: mongoose } = require('mongoose')
const Report = require('../api/model/report')
const { reportSeed } = require('../data/reports-seed')
require('dotenv').config()

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const anyReport = await Report.findOne()
    console.log(anyReport)
    if (!(anyReport === null)) {
      await Report.collection.drop()
    } else {
      console.log('No Collection of Reports to drop')
    }
  })
  .catch((err) => {
    console.log(`something went wrong deleting reports ${err}`)
  })
  .then(async () => {
    await Report.insertMany(reportSeed)
    console.log('report seed inserted 🖕')
  })
  .catch((err) => {
    console.log(`Something when wrong instering ${err}`)
  })
  .finally(() => mongoose.disconnect())
