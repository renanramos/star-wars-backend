
require('dotenv').config()
const express = require('express')
const app = express();
const users = require('./routes/user.route')
const bodyParser = require('body-parser')

const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "*")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.setHeader("Content-Type", "application/json");
    next();
})

app.use('/users', users)

app.get('/', (req, res) => res.send(JSON.stringify({ response: { status: 200, message: 'Ok' } })))

app.listen(port, () => console.log(`Server running on port ${port}`))