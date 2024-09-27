const { report } = require('../api/routes/report')

const reportSeed = [
  {
    _id: '66f475c5369a8f3c480146f6',
    description: 'zombie-el primer',
    updates: [],
    resolved: false,
    img: 'https://res.cloudinary.com/dfak9usy6/image/upload/v1727296963/reports/oqwcfrnuh9gzmkvib0ba.svg',
    createdAt: '2024-09-25T20:42:45.547Z',
    updatedAt: '2024-09-25T20:42:45.547Z',
    __v: 0
  },
  {
    _id: '66f67e87c443c977290c910d',
    description: 'una imagen FEA',
    updates: [],
    resolved: false,
    img: 'https://res.cloudinary.com/dfak9usy6/image/upload/v1727430279/reports/apbvyhr8rnculk6d57es.gif',
    createdAt: '2024-09-27T09:44:39.941Z',
    updatedAt: '2024-09-27T09:44:39.941Z',
    __v: 0
  },
  {
    _id: '66f67eaac443c977290c910f',
    description: 'una imagen bonita',
    updates: [
      '66f125e296762df3717241a5',
      '66f125c196762df3717241a1',
      '66f125ad96762df37172419f',
      null
    ],
    resolved: true,
    img: 'https://res.cloudinary.com/dfak9usy6/image/upload/v1727430314/reports/tjsohokna8wgofhpmchc.png',
    createdAt: '2024-09-27T09:45:14.995Z',
    updatedAt: '2024-09-27T13:21:55.461Z',
    __v: 0
  }
]

const updateSeed =
[
  {
    "_id": "66f125ad96762df37172419f",
    "description": "three images",
    "createdAt": "2024-09-23T08:24:13.755Z",
    "updatedAt": "2024-09-23T08:24:13.755Z",
    "__v": 0
  },
  {
    "_id": "66f125c196762df3717241a1",
    "description": "no images",
    "createdAt": "2024-09-23T08:24:33.149Z",
    "updatedAt": "2024-09-23T08:24:33.149Z",
    "__v": 0
  },
  {
    "_id": "66f125e296762df3717241a5",
    "description": "updated update",
    "createdAt": "2024-09-23T08:25:06.549Z",
    "updatedAt": "2024-09-27T13:57:18.293Z",
    "__v": 0
  }
]
module.exports = { reportSeed, updateSeed }
