import { Router } from "express"

const users = [
    {id:1, nombre:"Agustina Sanchez", email:"agussanchez@gmail.com"},
    {id:2, nombre:"Alexis Herrera", email:"aleherrera@gmail.com"},
    {id:3, nombre:"Diego Katz", email:"diegokatz@gmail.com"}
]

const usersRouter = Router();

const informarNuevoUsuario = (req, res, next) => {
    console.log("Se agregó una nuevo Usuario!");

    next();
}

usersRouter.get("/", (req, res) => {    
    res.send(users);
})
usersRouter.post("/", informarNuevoUsuario, (req, res) => {
    let {nombre, email} = req.body;
    const newUser = {id:(users.length+1), nombre:nombre, email:email};
    users.push(newUser);

    res.send({estado:"OK", mensaje:"Se agregó el usuario correctamente!"});
})

export default usersRouter