import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const servidorSchema = new Schema({

    nombreServidor: {type: String, required: [true, 'Nombre obligatorios']},
    ipServidor: {type: String, required: [true, 'IP obligatoria']},
    tipoServidor: {type: String, required: [true, 'tipo server obligatorio']},
    soServidor: {type: String, required: [true, 'SO obligatorio']},
    ramServidor: {type: Number, required: [true, 'RAM obligatoria']},
    procServidor: {type: Number, required: [true, 'Cant Procesadores obligatorios']},
    discServidor: {type: Number, required: [true, 'Cant en Disco obligatorios']},
    ambienteServidor: {type: String, required: [true, 'Cant en Disco obligatorios']},
    date:{type: Date, default: Date.now},
    activo: {type: Boolean, default: true}
}); 
//Convertir a modelo
const Servidor = mongoose.model('Servidor', servidorSchema);
export default Servidor;