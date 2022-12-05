const {Router}=require("express");
const rutasAlbum=Router();
const ctrAlb=require("../controllers/albumes.js")

rutasAlbum.get('/album', ctrAlb.obtener);
rutasAlbum.get('/album/:id', ctrAlb.obtenerid);   
rutasAlbum.post('/album/id', ctrAlb.add);
rutasAlbum.put('/album',ctrAlb.edit);

module.exports=rutasAlbum;