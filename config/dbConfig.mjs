import mongoose from "mongoose";


export async function connectDB() {
  try {
    await mongoose.connect(
      'mongodb+srv://Grupo-17:grupo17@cursadanodejs.ls9ii.mongodb.net/PracticaSuperHeroes?retryWrites=true&w=majority',{
        useNewUrlParser : true,
        useUnifiedTopology : true
      });
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.log('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
}