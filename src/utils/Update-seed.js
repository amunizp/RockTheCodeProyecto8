const { default: mongoose } = require('mongoose')
const { updateSeed } = require('../data/reports-seed')
const Update = require('../api/model/update')
require('dotenv').config()

mongoose
  .connect(process.env.DB_URL)
  .then(async () => {
    const anyUpdate = await Update.findOne()
    if (!(anyUpdate === null)) {
      await Update.collection.drop()
    } else {
      console.log('No Collection of Updates to drop')
    }
  })
  .catch((err) => {
    console.log(`something went wrong deleting updates ${err}`)
  })
  .then(async () => {
    await Update.insertMany(updateSeed)
    console.log('Update seed inserted 🖕')
  })
  .catch((err) => {
    console.log(`Something when wrong inserting updates ${err}`)
  })
  .finally(() => mongoose.disconnect())
