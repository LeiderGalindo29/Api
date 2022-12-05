const { default: mongoose } = require('mongoose');

const schema = mongoose.Schema({
    nombreGenero: String,
    estadoGenero: String
  });
  
  module.exports=mongoose.model('Genero',schema);