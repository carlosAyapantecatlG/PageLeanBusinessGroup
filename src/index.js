const express =  require('express');
const api = express();


//middlewares 
//esto sirve para procesar los datos antes de llegar a las rutas 
//sirve para convertir los datos a json para ser porcesados 
api.use(express.json());
api.use(express.urlencoded({extended : false}));

//routes

api.use(require('./rutas/rutas'));


api.listen(3000);

console.log('Server on port 3000');