const genero = require("../models/Genero");

exports.obtener = async (req, res) => {

    const generos = await genero.find()
    res.status(200).json(generos)

}

exports.obtenerid = async (req, res) => {
  try {
    const id = req.params.id;
    const generos = await genero.findById(id);
    res.status(200).json(generos);
  } catch (error) {
    res.status(500).json(error)
  }

}
exports.add = async (req, res) => {
  try {

    const newgenero = new genero(req.body)
    await newgenero.save();
    console.log(newgenero);
    res.json({ msj: "Genero registrada exitosamente", id: newgenero._id })
  } catch (error) {
    res.status(500).json({msj:"Error al registrar"+error})
  }

}

exports.edit = async(req, res) => {
  try {
    const id = req.params.id;
    const newgenero = new genero(req.body)
    //console.log(`El id que se va a cambiar estado es ${id}`);
    const cambiogenero = await genero.findByIdAndUpdate(id, newgenero);
    res.json({ msj: "Genero actualizada exitosamente"})
  } catch(error) {
    res.status(500).json(error);
  }
}
