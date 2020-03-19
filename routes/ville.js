var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send("Ville: " + req.body.nom_ville);
});

router.post('/', function(req, res, next) {
    res.send("Ville: " + req.body.nom_ville);
  });

module.exports = router;