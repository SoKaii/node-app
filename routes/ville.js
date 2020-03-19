const axios = require('axios');
var express = require('express');
var router = express.Router();
const geoKey = "232812665617593167485x5030";
/* POST ville page. */
router.post('/', function(req, res, next) {


  const url = `https://geocode.xyz/${req.body.nom_ville}?json=1&auth=${geoKey}`;
  const getData = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;
    if(data.error){
      res.render('ville', { erreur: "Erreur : "+data.error.description});
    } else{
        console.log(data.standard.city);
        console.log(data.longt);
        console.log(data.latt);

        res.render('ville', { nom_ville: "Ville : "+data.standard.city, longitude: "longitude : "+data.longt, lattitude: "lattitude : "+data.latt, lattitudeMaps: data.latt, longitudeMaps: data.longt});
    }
  } catch (error) {
    console.log(error);

    }
  };
  getData(url);
});

module.exports = router;
