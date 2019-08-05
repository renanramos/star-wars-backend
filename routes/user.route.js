const express = require('express')
const router = express.Router()
const mod = require('./../module/module-mysql')

router.get('/login', (req,res) => {        
    let user = req.query
    mod.login(user, (data)=>{
        if(data[0]){            
            res.status(200).json(data[0])
        }else{
            res.json({ response: {error: '404', message: 'Usuário não encontrado!'}})
            res.status(404)
        }
    });
});

module.exports = router