
//Importo el fichero .env para traerme las variables de entorno
require('dotenv').config();
module.exports = {    
//secret: process.env.AUTH_SECRET, 

secret: process.env.AUTH_SECRET || "holapatimicola", //KEY USADA PARA ENCRIPTAR

//expires: process.env.AUTH_EXPIRES, 

expires: process.env.AUTH_EXPIRES || "6h", //DURACIÓN DEL TOKEN 

//rounds: processenv.AUTH_ROUNDS 

rounds: process.env.AUTH_ROUNDS || 10 //VECESQUE SE ENCRIPTA LA CONTRASEÑA

}