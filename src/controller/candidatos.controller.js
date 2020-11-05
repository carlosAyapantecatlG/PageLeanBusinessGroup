const conexion = require('../conexionesdb/conexion');
const candidatos = require('../models/candidatos');
const Candidatos = require('../models/candidatos');

const getCandidatos = async (req,res) => {
    const candidatos = await Candidatos.find();
    console.log(candidatos);
    const contador = candidatos.length ;
   if (contador == 0) {
    res.send('Sin registros');
   }else{
      res.status(200).json(candidatos);
   };
   
 
};

const getCandidatosById = async (req,res) => {
    const id = req.params.id;
    const candidatos = await Candidatos.findById(id, (err,document)=> {
        if(err){
         console.log(err); 
        res.status(200).json({});
        } 
    });
    console.log(candidatos);
   
    res.status(200).json(candidatos);
}; 

const postCandidatos = async( req,res) => { 
   const candidatos = new Candidatos(req.body);

  // console.log(candidatos);
 
   const save =  await candidatos.save((err, document) =>{ 
    if(err){ 
        console.log(err);
        res.send(err.errors.mail.message);
    }else{
    console.log(document); 
}
});

res.status(200).json(
    {
        message:'candidatos creado correctamente',
        body:{
            candidatos
        }
        });
};

const deleteCandidatos = async (req,res) => { 
    const id = req.params.id; 

    const response = await   Candidatos.remove( {_id : id });

    console.log()
    res.status(200).json(response);
}


module.exports= {getCandidatos, postCandidatos, getCandidatosById, deleteCandidatos};