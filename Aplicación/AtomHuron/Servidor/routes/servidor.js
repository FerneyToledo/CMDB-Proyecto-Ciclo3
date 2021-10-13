import express from 'express';
const router = express.Router();
//Se estipula la generación de rutas 

import Servidor from '../models/servidor'
//Agregar una nota
router.post('/servidor-nuevo', async (req, res) => {
    //Estableciendo la funcionalidad con request and response
    const body = req.body; //Constante que recogerá el request (req)
    try {
        const ServidorDB= await Servidor.create(body);//Constante para crear el documento 
        res.status(200).json(ServidorDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: "error en la creación del servidor",
            error
        })
    }
});

router.get('/servidor/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const ServidorDB=await Servidor.findOne({_id});
        res.json(ServidorDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: "error en la consulta por ID",
            error
        })
    }
});

//Traer todos los usuarios
router.get('/servidor', async(req, res) => { 
    try { 
        const ServidorDB = await Servidor.find(); 
        res.json(ServidorDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error })   
    } 
});

//Eliminar registro por ID 
router.delete('/servidor/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const ServidorDB = await Servidor.findByIdAndDelete({_id}); 
        if(!ServidorDB){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', 
                error }) 
            } 
            
        res.json(ServidorDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error }) 
    }
});
//Modificar por ID
router.put('/servidor/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const ServidorDB = await Servidor.findByIdAndUpdate(
            _id,
            body, { new: true });
        res.json(ServidorDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});
//Exportamos la configuración de express App
module.exports=router;
