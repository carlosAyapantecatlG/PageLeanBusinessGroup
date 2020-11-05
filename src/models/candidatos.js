const {Schema, model} = require('mongoose');

 const candidatosSchema = new Schema ({
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
    telefono:
            { 
               movil : { 
                   type : String
               },
               fijo : { 
                   type : String
               }
            },
    perfil: {
        type: String
    }, 
    puesto :{ 
        type: String
    },
    salario : {type : Number
    },
    curriculum : {type : String
    },
    comentarios : { 
        type : String
    } 

});


module. exports =  model('candidatos', candidatosSchema );


