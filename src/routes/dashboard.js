var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

router.get("/func", function (req, res) {
    dashboardController.func(req, res);
});

module.exports = router;