var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var cars = mongoose.model('cars');
/* GET users listing. */
router.get('/company', function (req, res, next) {
  var data = {
    "company": {
      "id": "001",
      "label": "Company",
      "values": ["Ford", "Acura"],
      "value": null,
      "image": null

    },
    "modal": {
      "id": "002",
      "label": "Modal",
      "values": [],
      "value": null
    },
    "images": {
      "id": "003",
      "label": "Images",
      "values": [],
      "value": null
    }


  };
  //  cars.find(function(err, result) {
  //     if (err) throw err;
  //      console.log("p in find",res.json(cars));
  //     console.log(result);
  //     // db.close();y

  //   });
  return res.send(data);
});

router.get('/model', function (req, res, next) {
  var data = {
    "Ford": ["Edge", "Escape"],
    "Acura": ["ILX", "MDX"],
    "Edge": ["public/images/edge.jpg"],
    "Escape": ["public/images/escape.jpg"],
    "ILX": ["public/images/ILX.jpg"],
    "MDX": ["public/images/MDX.jpg"],
  };
  //  cars.find(function(err, result) {
  //     if (err) throw err;
  //      console.log("p in find",res.json(cars));
  //     console.log(result);
  //     // db.close();y

  //   });
  return res.send(data);
});

module.exports = router;