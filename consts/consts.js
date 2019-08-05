require('dotenv').config()

const _login_sql = `SELECT user.user_id, user.user_name FROM \`${process.env.DATABASE}\`.\`${process.env.TABLE}\` WHERE user.user_name = ? and user.user_password = ?`;

module.exports = {
    login_sql: _login_sql
}