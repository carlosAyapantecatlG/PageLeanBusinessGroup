const conexion = require('../conexionesdb/conexion');
const Contactos = require('../models/contactos');

const getContactos = async (req,res) => {
    const contactos = await Contactos.find();
    console.log(contactos);
   
    res.status(200).json(contactos);
};

const getContactosById = async (req,res) => {
    const id = req.params.id;
    const contactos = await Contactos.findById(id, (err,document)=> {
        if(err){
         //console.log('err'); 
        res.status(200).json({});
        } 
    });
    console.log(contactos);
   
    res.status(200).json(contactos);
}; 

const postContactos = async( req,res) => { 
   const contactos = new Contactos(req.body);
 
   const save =  await contactos.save((err, document) =>{ 
    if(err){ 
        console.log(err);
        res.send(err.errors.mail.message);
    }else{
    console.log(document); 
}
});

res.status(200).json(
    {
        message:'Contacto creado correctamente',
        body:{
            contactos
        }
        });
};

const deleteContactos = async (req,res) => { 
    const id = req.params.id; 

    const response = await   Contactos.remove( {_id : id });

    console.log()
}


module.exports= {getContactos, postContactos, getContactosById, deleteContactos};