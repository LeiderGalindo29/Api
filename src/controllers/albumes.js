const album = require("../models/Album");

exports.obtener = async (req, res) => {

    const albumes = await album.find()
    res.status(200).json(albumes)

}

exports.obtenerid = async (req, res) => {
  try {
    const id = req.params.id;
    const albumes = await album.findById(id);
    res.status(200).json(albumes);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.add = async (req, res) => {
  try {

    const newalbum = new album(req.body)
    await newalbum.save();
    console.log(newalbum);
    res.json({ msj: "album registrada exitosamente", id: newalbum._id })
  } catch (error) {
    res.status(500).json({msj:"Error al registrar"+error})
  }

}

exports.edit = async(req, res) => {
  try {
    const id = req.params.id;
    const newalbum = new album(req.body)
    //console.log(`El id que se va a cambiar estado es ${id}`);
    const cambioalbum = await album.findByIdAndUpdate(id, newalbum);
    res.json({ msj: "album actualizada exitosamente"})
  } catch(error) {
    res.status(500).json(error);
  }
}
