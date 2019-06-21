const bodyParser = require('body-parser')
const express = require('express')
const mod = require('./module/module-mysql')

const app = express();

const port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods","GET")
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.setHeader("Content-Type", "application/json");
    next();
})

app.get('/', (req, res) => res.send('App Star Wars'))

app.post('/api/users', (req, res) => {
    let user = req.body    
    mod.login(user, (data)=>{
        res.json(data)
        res.status(200)
    });    
})

app.listen(port, () => console.log(`Server running on port ${port}`))