const { default: mongoose } = require('mongoose');

const schema = mongoose.Schema({
    duracionCancion: String,  
    estadoCancion: String,
    fechaGrabacion: String,
    idAlbumFK : String,
    nombreCancion: String   
  });
  
  module.exports=mongoose.model('Cancion',schema);