const mysql = require('mysql')
const db = require('./../db/config')

const _getConnection = () => {
    return mysql.createConnection(db.config)
}

const _loginUser = (user, callback) =>{
    let conn = _getConnection()
    conn.query('SELECT user.user_id, user.user_name FROM user WHERE user.user_name = ? and user.user_password = ?', [user.username, user.password], (error, results, fields) => {
        if(error) throw error
        callback(results)
    })
    conn.end()
}

module.exports = {
    login : _loginUser
}