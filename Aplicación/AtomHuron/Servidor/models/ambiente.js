import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ambienteSchema = new Schema({

    nombreAmbiente: {type: String, required: [true, 'Nombre obligatorio']},
    descripcionAmbiente: String,
    date:{type: Date, default: Date.now},
    activo: {type: Boolean, default: true}
}); 

//Convertir a modelo
const Ambiente = mongoose.model('Ambiente', ambienteSchema);
export default Ambiente;