const express = require('express')
const router = express.Router()
const mod = require('./../module/module-mysql')

router.get('/login', (req,res) => {        
    let user = req.query;
    mod.login(user, (data) => {
        if(!data.status){            
            res.status(200).json(data);
        }else{
            res.status(404).json({ response: {error: '404', message: 'Usuário não encontrado!'}});
        }
    });
});

module.exports = router