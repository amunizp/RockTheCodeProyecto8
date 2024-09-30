# RockTheCodeProyecto8

APi REST Files learning how to use cloudinary to save files and link them to documents on mongo

## Description

Neighbour takes a picture to complete the description. Other neighbours take more pictures to check that the report is completed with updates.

### reach goal

Check exif data of the image to make sure it is not a duplicate. If it is, no new file is stored but old file linked instead.

## Endpoints

### Creating Reports CRUD

```
GET http://localhost:3000/api/v1/reports
```

Will return a list of all the reports

```
POST http://localhost:3000/api/v1/reports
\\body
{
  "description": "hello there",
"img":"theURL to image",
  "resolved": false
  "updates":[]
}
```

Will create a document. Note that the description and resolved fields are compulsory. All other fields are optional.
Both the image and the updates fields are lists so we can add more than one with ["a", "b", "c"]

```
PUT http://localhost:3000/api/v1/reports/66ec32fd04f4f8f8f21e240e

\\body-form

  "description": "I am updating",
"img": File-on-your-computer. ,
"updates": "idnumber<here>"
  "resolved": false

```

This should update but append the update.

```
DELETE http://localhost:3000/api/v1/reports/66ec32fd04f4f8f8f21e240e
```

This will delete the data from the but also any image stored.

### Creating updates with CRUD

## Seed

> npm run seed

Will delete the current seed on the database and upload the saved seed in the repo.
