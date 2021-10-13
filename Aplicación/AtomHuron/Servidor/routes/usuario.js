import express from 'express';
const router = express.Router();
//Se estipula la generación de rutas 

import Usuario from '../models/usuario'
//Agregar una nota
router.post('/usuario-nuevo', async (req, res) => {
    //Estableciendo la funcionalidad con request and response
    const body = req.body; //Constante que recogerá el request (req)
    try {
        const UsuarioDB= await Usuario.create(body);//Constante para crear el documento 
        res.status(200).json(UsuarioDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: "error en la creación del usuario",
            error
        })
    }
});

router.get('/usuario/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const UsuarioDB=await Usuario.findOne({_id});
        res.json(UsuarioDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: "error en la consulta por ID",
            error
        })
    }
});

//Traer todos los usuarios
router.get('/usuario', async(req, res) => { 
    try { 
        const UsuarioDB = await Usuario.find(); 
        res.json(UsuarioDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error })   
    } 
});

//Eliminar registro por ID 
router.delete('/usuario/:id', async(req, res) => { 
    const _id = req.params.id; 
    try { 
        const UsuarioDB = await Usuario.findByIdAndDelete({_id}); 
        if(!UsuarioDB){ 
            return res.status(400).json({ 
                mensaje: 'No se encontró el id indicado', 
                error }) 
            } 
            
        res.json(UsuarioDB); 
    } catch (error) { 
        return res.status(400).json({ 
            mensaje: 'Ocurrio un error', error }) 
    }
});
//Modificar por ID
router.put('/usuario/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
        const UsuarioDB = await Usuario.findByIdAndUpdate(
            _id,
            body, { new: true });
        res.json(UsuarioDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});
//Exportamos la configuración de express App
module.exports=router;
