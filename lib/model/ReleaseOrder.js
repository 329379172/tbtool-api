/**
 * Created by linfeiyang on 2/26/16.
 */
var db = require('./Db');
var Sequelize = require('sequelize');

var releaseOrder = db.define('release_order', {
        id: {
            type: Sequelize.INTEGER,
            field: 'id',
            primaryKey: true
        },
        qtnc: Sequelize.STRING,
        tbnc: Sequelize.STRING,
        ip: Sequelize.STRING,
        qq: Sequelize.STRING,
        benjin: Sequelize.STRING,
        yongjin: Sequelize.STRING,
        lian: Sequelize.STRING,
        createTime: Sequelize.INTEGER,
        pay: Sequelize.STRING,
        free: Sequelize.STRING,
        bianhao: Sequelize.STRING,
        ordertime: Sequelize.STRING
    },
    {
        tableName: 'tbl_release_order',
        timestamps: false
    });

module.exports = releaseOrder;