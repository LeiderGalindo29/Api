const {Router}=require("express");
const rutasGenero=Router();
const ctrGrn=require("../controllers/generos.js")

rutasGenero.get('/genero', ctrGrn.obtener);
rutasGenero.get('/genero/:id', ctrGrn.obtenerid);   
rutasGenero.post('/genero/id', ctrGrn.add);
rutasGenero.put('/canciones',ctrGrn.edit);

module.exports=rutasGenero;