const { default: mongoose } = require('mongoose');

const schema = mongoose.Schema({
    nombreAlbum: String,
    anioPublicacion: String,
    idArtistasFK: String,
    idgeneroFK : String,
    estadoAlbum: String
  });
  
  module.exports=mongoose.model('Album',schema);