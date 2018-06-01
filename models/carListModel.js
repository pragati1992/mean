var mongoose = require('mongoose');

var carSchema = new mongoose.Schema(
    {


    cars: {
        ford: [{
            name: String,
            image: String,
        }],
        acura: [{
            name: String,
            image: String,
        }]

    }
  

}
);

mongoose.model('cars', carSchema);