var express = require('express');
var router = express.Router();

/* GET url */
router.get('/', (req, res, next) => {
 res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

module.exports = router;
