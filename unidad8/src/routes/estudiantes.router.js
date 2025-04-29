import { Router } from "express";
import { estudianteModel } from "../models/estudiantes.model.js";

const estudiantesRouter = Router();

estudiantesRouter.get("/", async (req, res) => {
    try {
        let students = await estudianteModel.find();
        res.send({result:"ok", payload:students});
    } catch (error) {
        res.send({result:"error", detail:"No se encontraron Estudiantes!"});
    }
})

estudiantesRouter.post("/", async (req, res) => {
    try {
        //const {nombre, apellido, edad, dni, curso, nota} = req.body;
        const student = {...req.body};
        console.log(student);
        
        const result = await estudianteModel.create(student);
        res.send({result:"ok", payload:result});
    } catch (error) {
        res.status(400).send(error);
    }
})

estudiantesRouter.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        //const {nombre, apellido, edad, dni, curso, nota} = req.body;
        const student = {...req.body};
        const result = await estudianteModel.updateOne({_id:id}, student);

        if (result.modifiedCount > 0) {
            res.send({result:"ok", payload:result});
        } else {
            res.send({result:"ok", message:"No se actualizó ningún Estudiante!"});
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

estudiantesRouter.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const result = await estudianteModel.deleteOne({_id:id});

        if (result.deletedCount > 0) {
            res.send({result:"ok", payload:result});
        } else {
            res.send({result:"ok", message:"No se eliminó ningún Estudiante!"});
        }
    } catch (error) {
        res.status(400).send(error);
    }
})

export default estudiantesRouter