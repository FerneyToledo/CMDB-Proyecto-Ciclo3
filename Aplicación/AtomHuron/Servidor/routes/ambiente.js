import express from 'express';
const router = express.Router();
//Se estipula la generación de rutas 

import Ambiente from '../models/ambiente'
//Agregar un Ambiente
router.post('/ambiente-nuevo', async (req, res) => {
    //Estableciendo la funcionalidad con request and response
    const body = req.body; //Constante que recogerá el request (req)
    try {
        const AmbienteDB= await Ambiente.create(body);//Constante para crear el documento 
        res.status(200).json(AmbienteDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: "error en la creación del ambiente",
            error
        })
    }
});
//Traer los registros por Id 
router.get('/ambiente/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const AmbienteDB=await Ambiente.findOne({_id});
        res.json(AmbienteDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: "error en la consulta por ID",
            error
        })
    }
});
;
//Traer los registros por nombre 
router.get('/ambiente/:nombreAmbiente', async (req, res) => {
    const _nombreAmbiente = req.params.nombreAmbiente;
    try {
        const AmbienteDB=await Ambiente.findOne({_nombreAmbiente});
        res.json(AmbienteDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: "error en la consulta por ID",
            error
        })
    }
});
//Traer todos los registros
router.get('/ambiente', async(req, res) => { 
    try { 
        const AmbienteDB = await Ambiente.find(); 
        res.json(AmbienteDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error })   
    } 
});

//Eliminar registro por ID 
router.delete('/ambiente/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const AmbienteDB = await Ambiente.findByIdAndDelete({_id}); 
        if(!AmbienteDB){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', 
                error }) 
            } 
            
        res.json(AmbienteDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error }) 
    }
});

//Modificar por ID
router.put('/ambiente/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const AmbienteDB = await Ambiente.findByIdAndUpdate(
            _id,
            body, { new: true });
        res.json(AmbienteDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});
//Exportamos la configuración de express App
module.exports=router;
