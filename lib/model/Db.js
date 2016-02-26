/**
 * Created by linfeiyang on 2/26/16.
 */
var Sequelize = require('sequelize');
var db = new Sequelize('mysql://root:123456@localhost:3306/blog');
module.exports = db;