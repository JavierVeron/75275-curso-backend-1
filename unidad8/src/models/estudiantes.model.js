import mongoose from "mongoose"

const estudianteSchema = new mongoose.Schema({
    nombre:{type:String, required:true},
    apellido:{type:String, required:true},
    edad:{type:Number, required:true},
    dni:{type:Number, required:true, unique:true},
    curso:{type:String, required:true},
    nota:{type:Number, required:true}
})

export const estudianteModel = mongoose.model("estudiantes", estudianteSchema);