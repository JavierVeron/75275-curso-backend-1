const socket = io();
const chatBox = document.getElementById("chatBox");
const messageLogs = document.getElementById("messageLogs");
let usuario = "";

Swal.fire({
    title: "Ingrese su Nombre:",
    input: "text",
    confirmButtonText: "Enviar",
    allowOutsideClick: false
}).then((result) => {
    if (result.isConfirmed) {
        usuario = result.value;
        socket.emit("nuevoUsuario", usuario);
    }
});

/* socket.emit("message", "Hola gente, les escribo desde el Front!");

socket.on("evento_individual", data => {
    const texto = document.getElementById("texto_indiviual");
    texto.innerHTML = data;
})

socket.on("evento_todos_menos_yo", data => {
    const texto = document.getElementById("texto_todos_menos_yo");
    texto.innerHTML = data;
})

socket.on("evento_todos", data => {
    const texto = document.getElementById("texto_todos");
    texto.innerHTML = data;
}) */

const enviarMensaje = () => {
    socket.emit("message", {user:usuario, message:chatBox.value});
}

socket.on("nuevoUsuario", data => {
    Swal.fire({
        position:"top-right",
        title:data,
        timer:2000,
        showConfirmButton:false
    })
})

socket.on("messageLogs", data => {
    let contenidoHTML = `<table class="table table-striped">`;

    for (const elemento of data) {    
        contenidoHTML += `<tr>
        <td><b>${elemento.usuario}:</b> ${elemento.mensaje}</td>
        </tr>`;
    }

    contenidoHTML += `</table>`;
    messageLogs.innerHTML = contenidoHTML;
})