const ingresar = () => {
    const formulario = document.querySelector('#formulario')
    const nombre = formulario.nombre.value
    const username = formulario.username.value
    const password = formulario.password.value

    const body = {
        'nombre': nombre, 
        'username': username, 
        'password':password
    }

    const propiedades = {
        method: 'POST',
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