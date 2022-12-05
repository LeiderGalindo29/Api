const {Router}=require("express");
const rutasCancion=Router();
const ctrCan=require("../controllers/canciones.js")

rutasCancion.get('/canciones', ctrCan.obtener);
rutasCancion.get('/canciones/:id', ctrCan.obtenerid);   
rutasCancion.post('/canciones/id', ctrCan.add);
rutasCancion.put('/canciones',ctrCan.edit);

module.exports=rutasCancion;