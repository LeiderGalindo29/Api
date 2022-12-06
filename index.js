const express = require('express');
const {connectDB} = require('./src/mongoCone');
const PORT= process.env.PORT || 3000;
//Conexión a la BD
connectDB();
const app = express()
//Midlewares
app.use(express.json());
app.set('view engine','ejs')
app.use(express.static('public'));

//Llamado de rutas
//app.use('/public', express.static('public/upload'));
app.use('/', express.static('../public/index'));
app.use('/api', require('./src/routes/canciones.routes'));
app.use('/api', require('./src/routes/albumes.routes'));
app.use('/api', require('./src/routes/generos.routes'));
//app.use("/api",rutasAlbum);
//app.use("/api",rutasGenero);

/*app.get('/', (req,res)=>{
    res.send('./index')
})*/
app.listen(PORT)

module.exports=app;