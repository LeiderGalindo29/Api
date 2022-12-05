const express = require('express');
const {connectDB} = require('./src/mongoCone');
//Conexión a la BD
connectDB();
const app = express()
//Midlewares
app.use(express.json());

//Llamado de rutas
//app.use('/public', express.static('public/upload'));
//app.use('/public', express.static(__dirname + '/public'));
app.use('/api', require('./src/routes/canciones.routes'));
app.use('/api', require('./src/routes/albumes.routes'));
app.use('/api', require('./src/routes/generos.routes'));
//app.use("/api",rutasAlbum);
//app.use("/api",rutasGenero);

app.get('/', (req,res)=>{
    res.send('Hola')
})
app.listen(3000)

module.exports=app;