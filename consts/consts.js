const _login_sql = `SELECT user.user_id, user.user_name FROM \`sw-portal\`.\`user\` WHERE user.user_name = ? and user.user_password = ?`;

module.exports = {
    login_sql: _login_sql
}