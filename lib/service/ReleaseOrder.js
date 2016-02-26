/**
 * Created by linfeiyang on 2/26/16.
 */
var ReleaseOrder = require('../model/ReleaseOrder');

var selectAll = function (callback) {
    ReleaseOrder.findAll().then(callback);
};

var count = function (callback) {
    ReleaseOrder.count().then(callback);
};

var selectByPage = function (page, pageSize, callback) {
    ReleaseOrder.findAll({offset: (page - 1) * pageSize, limit: pageSize}).then(callback);
};

module.exports = {
    selectAll: selectAll,
    count: count,
    selectByPage: selectByPage
};