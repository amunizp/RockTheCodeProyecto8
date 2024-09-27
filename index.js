const express = require('express')
const connectMongo = require('./src/config/connectMongo')
require('dotenv').config()
const reportsRouter = require('./src/api/routes/report')
const updatesRouter = require('./src/api/routes/update')
//import { v2 as cloudinary } from 'cloudinary'

const cors = require('cors')
const connectCloudinary = require('./src/config/connectCoudinary')
connectMongo()

connectCloudinary()

const app = express()
app.use(cors())
app.use(express.json())
console.log('express JSON used')

app.use('/api/v1/reports/', reportsRouter)
app.use('/api/v1/updates/', updatesRouter)
app.use('*', (req, res, next) => {
  console.log('failed to use the app')
  return res.status(404).json('Try to ammend the URL to get a better route')
})
port = 3000

app.listen(port, () => {
  console.log(`OK connected to node server http://localhost:${port}  🤝 `)
})

// const food = {
//   pizza: '🍕',
//   pizzas: ['🍕', '🍕'],
//   burger: '🍔',
//   fries: '🍟',
//   cake: '🎂'
// }

// for (key in food) {
//   // if ('pizza' in key) {
//   console.log(`${key}:${food[key]}`)
//   // }
// }
// console.log(food.hasOwnProperty('pizza'))

// var z = Object.keys(food)
//   .filter(function (k) {
//     return k.indexOf('pizza') == 0
//   })
//   .reduce(function (newData, k) {
//     newData[k] = food[k]
//     return newData
//   }, {})

// console.log(z)
