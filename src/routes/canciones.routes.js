const {Router}=require("express");
const rutasCancion=Router();
const ctrCan=require("../controllers/canciones.js")

rutasCancion.get('/canciones', ctrCan.obtener);
//rutasCancion.get('/:id', ctrCan.obtenerid);
//rutasCancion.post('/', ctrCan.add);
//rutasCancion.put('/:id',ctrCan.edit);

module.exports=rutasCancion;