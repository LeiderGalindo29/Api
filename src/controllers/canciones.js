const cancion = require("../models/Cancion");

exports.obtener = async (req, res) => {

    const canciones = await cancion.find()
    res.status(200).json(canciones)

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

    const newcancion = new cancion(req.body)
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
    const newcancion = new cancion(req.body)
    //console.log(`El id que se va a cambiar estado es ${id}`);
    const cambiocancion = await cancion.findByIdAndUpdate(id, newcancion);
    res.json({ msj: "Habitación actualizada exitosamente"})
  } catch(error) {
    res.status(500).json(error);
  }
}
