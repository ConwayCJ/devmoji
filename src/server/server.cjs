// server.js
const express = require('express')
const bodyParser = require('body-parser')
const {PrismaClient} = require('@prisma/client')

const app = express()
const port = 5000
const prisma = new PrismaClient()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// GET endpoint to retrieve data
app.get('/api/data', async (req, res) => {
  const data = await prisma.data.findMany()
  res.json(data)
})

// POST endpoint to save data
app.post('/api/data', async (req, res) => {
  const newData = req.body
  const createdData = await prisma.data.create({data: newData})
  res.json({message: 'Data successfully saved', data: createdData})
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
