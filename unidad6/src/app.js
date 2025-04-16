import express from "express";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.router.js";
import {Server} from "socket.io";

// Inicializo el Servidor Express
const app = express();
const port = 8080;
const httpServer = app.listen(port, () => {
    console.log("Servidor activo: " + port);  
}); // Crear un Servidor HTTP
const socketServer = new Server(httpServer); // Crear un Servidor Socket

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public"));

// Configurar las rutas
app.use("/", viewsRouter);

// Creamos nuestro Array de Mensajes
const mensajes = [];
const generarId = () => {
    return mensajes.length + 1;
}

// Definir los canales de nuestro Socket Server
socketServer.on("connection", socket => {
    console.log("Nuevo Usuario Conectado!");

    /* socket.on("message", data => {
        console.log(data);
    }); */

    /* socket.emit("evento_individual", "Texto Individual");
    socket.broadcast.emit("evento_todos_menos_yo", "Texto para Todos menos el que emitió el Mensaje");
    socket.emit("evento_todos", "Texto para Todos"); */

    socket.on("nuevoUsuario", data => {
        socket.broadcast.emit("nuevoUsuario", data + " se ha conectado!");
    })

    socket.on("message", data => {
        const newMessage = {id:generarId(), usuario:data.user, mensaje:data.message};
        mensajes.push(newMessage);
        socket.emit("messageLogs", mensajes);
    })
})