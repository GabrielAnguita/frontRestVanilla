const actualizar = (id) => {
    const url = `http://localhost:8080/api/v1/usuarios/${id}`
    const propiedades = {
        method: 'GET'
    }
    
    fetch(url, propiedades)
    .then(response => response.json())
    .then(usuarioDto => {
        const usuario = usuarioDto.data[0]
        const formulario = document.querySelector('#formulario')
        formulario.nombre.value = usuario.nombre
        formulario.username.value = usuario.username
        formulario.password.value = usuario.password
        formulario.id.value = usuario.id

        // actualiza el botón ingresar al contexto de actualizar
        const btn_ingresar = document.querySelector('#btn-ingresar')
        btn_ingresar.innerHTML = "Actualizar"
        btn_ingresar.onclick = hacer_actualizacion
    })
}

const hacer_actualizacion = () => {
    const url = "http://localhost:8080/api/v1/usuarios"
    const formulario = document.querySelector('#formulario')
    const nombre = formulario.nombre.value
    const username = formulario.username.value
    const password = formulario.password.value
    const id = formulario.id.value

    const body = {
        'id': id,
        'nombre': nombre, 
        'username': username, 
        'password':password
    }

    const propiedades = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(body)
    }

    fetch(url, propiedades)
    .then(response => response.json())
    .then(usuarioDto => {
        llenarTabla()
        formulario.reset()
    })
}