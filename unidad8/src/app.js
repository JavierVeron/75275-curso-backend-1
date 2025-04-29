import express from "express"
import usersRouter from "./routes/users.router.js"
import estudiantesRouter from "./routes/estudiantes.router.js"
import { estudianteModel } from "./models/estudiantes.model.js"
import mongoose from "mongoose"

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/users", usersRouter);
app.use("/api/estudiantes", estudiantesRouter);
app.listen(port, () => {
    console.log("Servidor conectado: " + port);
})

mongoose.connect("mongodb+srv://javierveron:Javier123@cluster0.4sss6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

// Insertar 10 estudiantes a la colección estudiantes
/* estudianteModel.insertMany([
    {nombre:"Ignacio", apellido:"Martinez", edad:23, dni:11222333, curso:"Backend I", nota:8},
    {nombre:"Alexis", apellido:"Herrera", edad:28, dni:11222334, curso:"Backend II", nota:9},
    {nombre:"Agustina", apellido:"Sanchez", edad:25, dni:11222335, curso:"React JS", nota:7},
    {nombre:"Marcos", apellido:"Gervacio", edad:26, dni:11222336, curso:"Backend I", nota:10},
    {nombre:"Stefany", apellido:"Gallo", edad:24, dni:11222337, curso:"React JS", nota:9}
]) */
