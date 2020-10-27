const {Router} = require('express');
const router = Router();

const { getContactos, postContactos , getContactosById, deleteContactos} = require('../controller/contactos.controller');
const {getCandidatos, postCandidatos, getCandidatosById, deleteCandidatos }  = require('../controller/candidatos.controller');

//Crud de contactos

router.get('/contacto', getContactos );
router.get('/contacto/:id', getContactosById);
router.post('/contacto', postContactos);
router.delete('/contacto/:id',deleteContactos);

//Crud de candidatos 
router.get('/candidatos', getCandidatos);
router.get('/candidatos/:id',getCandidatosById);
router.post('/candidatos', postCandidatos);
router.delete('/candidatos/:id', deleteCandidatos );

module.exports =  router;