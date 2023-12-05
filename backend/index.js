const express = require('express')
const connectToMongo = require('./db');

connectToMongo();
const app = express()
var cors = require('cors')

app.use(cors())

const port = process.env.port || 5000

app.use(express.json())

//Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
    console.log(`iNotebook listening at http://localhost:${port}`)
})