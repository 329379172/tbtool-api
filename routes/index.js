var express = require('express');
var router = express.Router();
var ReleaseOrder = require('../lib/service/ReleaseOrder');
/* GET home page. */
router.get('/', function (req, res, next) {
    ReleaseOrder.selectAll(function (err, result) {
        res.json(err);
    });
});

module.exports = router;
