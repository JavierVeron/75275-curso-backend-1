import { Router } from "express";
import { userModel } from "../models/users.model.js";

const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
    try {
        let users = await userModel.find();
        res.send({result:"ok", payload:users});
    } catch (error) {
        res.send({result:"error", detail:"No se encontraron Usuarios!"});
    }
})

usersRouter.post("/", async (req, res) => {
    const {nombre, apellido, email} = req.body;
    const user = {nombre, apellido, email};
    const result = await userModel.create(user);
    res.send({result:"ok", payload:result});
})

usersRouter.put("/:id", async (req, res) => {
    const {id} = req.params;
    const {nombre, apellido, email} = req.body;
    const user = {nombre, apellido, email};    
    const result = await userModel.updateOne({_id:id}, user);
    res.send({result:"ok", payload:result});
})

usersRouter.delete("/:id", async (req, res) => {
    const {id} = req.params;
    const result = await userModel.deleteOne({_id:id});
    res.send({result:"ok", payload:result});
})

export default usersRouter