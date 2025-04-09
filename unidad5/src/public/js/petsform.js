const addNewPet = () => {
    const nombre = document.getElementById("nombre");
    const categoria = document.getElementById("categoria");

    fetch('/api/pets/', {
        method: 'POST',
        body: JSON.stringify({
          nombre: nombre.value,
          categoria: categoria.value
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
  