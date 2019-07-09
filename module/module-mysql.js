const mysql = require('mysql')
const db = require('./../db/config')
const constants = require('./../consts/consts')

const _getConnection = () => {
    return mysql.createConnection(db.config)
}

const _loginUser = (user, callback) =>{
    let conn = _getConnection()
    conn.query(constants.login_sql, [user.name, user.password], (error, results, fields) => {
        if(error) throw error
        callback(results)
    })
    conn.end()
}

module.exports = {
    login : _loginUser
}