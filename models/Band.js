// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Article Schema
var BandSchema = new Schema({

    // Title/Name of Band...
    title: {
        type: String,
        required: true
    },

    // Recording/ Showcase date
    date: {
        type: String,
        required: true
    },

    // youtube url's for the actual videos
    //you will need this to display the content on the web page.
    url: {
        type: String,
        required: true
    }

});

// Create the Band model with Mongoose
var Band = mongoose.model('project3', BandSchema);

// Export the Model
module.exports = Band;