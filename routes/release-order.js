var express = require('express');
var router = express.Router();
var ReleaseOrder = require('../lib/service/ReleaseOrder');
/* GET home page. */
router.get('/all', function (req, res, next) {
    ReleaseOrder.selectAll(function (err, result) {
        res.json(err);
    });
});

router.get('/:page', function (req, res, next) {
    var pageSize = 10;
    var page = ~~req.params['page'];
    page = page || 1;
    ReleaseOrder.selectByPage(page, pageSize, function (result) {
        res.json(result);
    });
});

module.exports = router;
