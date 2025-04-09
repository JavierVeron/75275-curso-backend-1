import { Router } from "express"
//import { uploader } from "../utils.js";

const pets = [
    {id:1, nombre:"Amy", categoria:"gato"},
    {id:2, nombre:"Benita", categoria:"gato"},
    {id:3, nombre:"Mora", categoria:"perro"}
]

const petsRouter = Router();
petsRouter.get("/", (req, res) => {
    res.send(pets);
})

/* petsRouter.post("/", uploader.single("imagen"), (req, res) => {
    if (!req.file) {
        res.status(400).send("Error! No se pudo subir la imagen!");
    }

    let {nombre, categoria} = req.body;    
    const newPet = {id:(pets.length+1), nombre:nombre, categoria:categoria, imagen:req.file.path};
    pets.push(newPet);

    res.send({estado:"OK", mensaje:"Se agregó la mascota correctamente!"});
}) */



export default petsRouter