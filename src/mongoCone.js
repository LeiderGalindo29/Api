const mongoConnection = require('mongoose');
const conexionBD=async()=>{
    
    try{
        const DB=await mongoConnection.connect('mongodb+srv://<Leider>:<90zrFTLT7RU4P6ET>@cluster0.exdvozw.mongodb.net/?retryWrites=true&w=majority');
        console.log("Conexión satisfactoria",DB.connection.name);
    }
    catch(error){
        console.log(error);
    }
}

module.exports=conexionBD;