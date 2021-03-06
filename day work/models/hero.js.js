const mongoose = require('mongoose');

const heroSchema =  new mongoose.Schema({
    name: String,
    birthname : String,
    movies : String,
    likecount : Number,
    imgUrl : String,
    deceased : Boolean
});

const Hero = mongoose.model("Hero", heroSchema);
module.exports = Hero;
