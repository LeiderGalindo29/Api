const mongoose = require('mongoose');
//require('dotenv').config();

const connectDB = async()=>{
      try{
            await mongoose.connect("mongodb+srv://Leider:12345@cluster0.n9alpov.mongodb.net/Disquera?retryWrites=true&w=majority");
            console.log(`conectado`)
      }catch(error){
            console.error(error);
      }
}
module.exports = {connectDB}