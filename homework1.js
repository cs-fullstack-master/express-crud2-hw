var hw1Collection =
    [
  {
    "index": 0,
    "eyeColor": "brown",
    "name": "Compton Santana",
    "gender": "male",
    "company": "ZENTIA",
    "email": "comptonsantana@zentia.com",
    "phone": "+1 (889) 463-2120"
  },
  {
    "index": 1,
    "eyeColor": "brown",
    "name": "Ora Morgan",
    "gender": "female",
    "company": "QUANTALIA",
    "email": "oramorgan@quantalia.com",
    "phone": "+1 (884) 441-3838"
  },
  {
    "index": 2,
    "eyeColor": "green",
    "name": "Lisa Nieves",
    "gender": "female",
    "company": "BUZZMAKER",
    "email": "lisanieves@buzzmaker.com",
    "phone": "+1 (883) 447-3613"
  },
  {
    "index": 3,
    "eyeColor": "green",
    "name": "Walter Randall",
    "gender": "male",
    "company": "GEEKETRON",
    "email": "walterrandall@geeketron.com",
    "phone": "+1 (989) 426-3794"
  },
  {
    "index": 4,
    "eyeColor": "blue",
    "name": "Lavonne Mcgowan",
    "gender": "female",
    "company": "ZIGGLES",
    "email": "lavonnemcgowan@ziggles.com",
    "phone": "+1 (930) 515-3676"
  },
  {
    "index": 5,
    "eyeColor": "blue",
    "name": "Christa Hewitt",
    "gender": "female",
    "company": "TASMANIA",
    "email": "christahewitt@tasmania.com",
    "phone": "+1 (881) 562-2662"
  }
];

var express = require('express');
var router = express.Router();
var HW1Data = require('../models/crimesModel');


router.get('/', (req, res)=> {


    HW1Data.create(hw1Collection, (error, results)=>{
        if(error){
            res.send(error);
        }
        else{
            res.send(results);
        }
    });

});

module.exports = router;
