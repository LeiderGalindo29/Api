const { default: mongoose } = require('mongoose');

const schema = mongoose.Schema({
    nombreCancion: String,
    fechaGrabacion: Date,
    duracionCancion: String,
    idAlbumFK : String,
    estadoCancion: String, 
    _id: String
  });
  
  module.exports=mongoose.model('Cancion',schema);