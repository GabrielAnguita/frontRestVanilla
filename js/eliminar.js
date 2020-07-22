const eliminar = (id) => {
    const confirma = confirm("Se eliminará el usuario id: " + id)
    if(!confirma)
        return

    const url = `http://localhost:8080/api/v1/usuarios/${id}`
    const propiedades = {
        method: 'GET'
    }

    fetch(url, propiedades)
    .then(response => response.json())
    .then(usuarioDto => {
        // la promesa ha encontrado al usuario
        const usuario = usuarioDto.data[0]

        const body = {
            'id': usuario.id,
            'nombre': usuario.nombre, 
            'username': usuario.username, 
            'password':usuario.password
        }

        const propiedades = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(body)
        }

        fetch('http://localhost:8080/api/v1/usuarios', propiedades)
        .then(response => response.json())
        .then(usuarioDto => {
            llenarTabla()
            formulario.reset()
        })

    })
}