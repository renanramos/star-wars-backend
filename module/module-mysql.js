const mysql = require('mysql')
const db = require('./../db/config')
const constants = require('./../consts/consts')

const _getConnection = () => {
    return mysql.createConnection(db.config)
}

const _loginUser = (user, callback) =>{
    let conn = _getConnection()
    conn.query(constants.login_sql, [user.username, user.password], (error, result, fields) => {
        if(error) console.log(error)
        callback(result)
    })
    conn.end()
}

module.exports = {
    login : _loginUser
}