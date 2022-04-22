const db = require ('./Db')
const Post = db.sequelize.define('postagens',{})

module.exports = Post