const db = require('../config/db')
const router = require('./user_inform')

router.post('/UserInfo', (req,res,next) =>{
    const param = [req.body.id, req.body.pw, req.body.armyunit]

    db.query('INSERT INTO Users(`id`,`pw`,`armyunit`) VALUES (?,?,?)' , param , (err, row) =>{
        if(err) console.log(err)
    })
    
    res.end
})