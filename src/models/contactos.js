const {Schema, model} = require('mongoose');

 const contactoSchema = new Schema ({
    nombre: {
        type : String,
        required : true
    } ,
    apellidos : {
        type : String,
    },
    mail : {
         type: String,
         required : true
            },
    organizacion: {
        type: String
    }, 
    puesto :{ 
        type: String
    },
    telefono:{ 
        String : { 
            type : String,
         }
    },
    soluciones : {type : []
    },
    comentarios : { 
        type : String
    } 

});


module. exports =  model('contactos', contactoSchema );


