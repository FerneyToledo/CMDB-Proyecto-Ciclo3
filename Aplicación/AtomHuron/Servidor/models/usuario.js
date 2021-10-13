import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({

    nombresUsuario: {type: String, required: [true, 'Nombres obligatorios']},
    apellidosUsuario: {type: String, required: [true, 'Apellidos obligatorios']},
    correoUsuario: {type: String, required: [true, 'Correo obligatorio']},
    rolUsuario: {type: String, required: [true, 'Rol obligatorio']},
    areaUsuario: String,
    date:{type: Date, default: Date.now},
    activo: {type: Boolean, default: true}
}); 
//Convertir a modelo
const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;