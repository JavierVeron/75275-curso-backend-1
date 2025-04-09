import express from "express";
import handlebars from "express-handlebars";
import petsRouter from "./routes/petsRouter.js";
import usersRouter from "./routes/usersRouter.js";
import __dirname from "./utils.js";

// Inicializo el Servidor Express
const app = express();
const port = 8080;
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));
app.listen(port, () => {
    console.log("Servidor activo: " + port);  
});

// Permite recibir los datos de un Post en formato json
app.use(express.json());
express.urlencoded({extended:true});

// Configurar las rutas
app.use("/api/users", usersRouter);
app.use("/api/pets", petsRouter);
app.use("/", (req, res) => {
    const usuario = {id:1, nombre:"Fabian Acosta"}

    res.render("index", usuario);
})