const cancion = require("../models/canciones");

exports.obtener = async (req, res) => {
  try {
    const canciones = await cancion.find();
    res.status(200).json(canciones);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.obtenerid = async (req, res) => {
  try {
    const id = req.params.id;
    const canciones = await cancion.findById(id);
    res.status(200).json(canciones);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.add = async (req, res) => {
  try {

    const newcancion = new cancion(req.body,req.file)
    console.log(req.file);
    if(req.file){
      const {filename}=req.file;
      newcancion.setImg(filename);
      console.log("si hay imagen")
    }else{
      console.log("No hay imagen")
    }
    await newcancion.save();
    console.log(newcancion);
    res.json({ msj: "Habitación registrada exitosamente", id: newcancion._id })
  } catch (error) {
    res.status(500).json({msj:"Error al registrar"+error})
  }

}

exports.edit = async(req, res) => {
  try {
    const id = req.params.id;
    const newcancion = new cancion(req.body,req.file)
    console.log(req.file);
    
    if(req.file){
      const {filename}=req.file;
      newcancion.setImg(filename);
      console.log("si hay imagen")
    }else{
      console.log("No hay imagen")
    }
    //console.log(`El id que se va a cambiar estado es ${id}`);
    const cambiocancion = await cancion.findByIdAndUpdate(id, newcancion);
    res.json({ msj: "Habitación actualizada exitosamente"})
  } catch(error) {
    res.status(500).json(error);
  }
}
