const llenarTabla = () => {
    const url = "http://localhost:8080/api/v1/usuarios"
    const propiedades = {
        method: 'GET'
    }

    fetch(url, propiedades)
    .then(response => response.json())
    .then(usuarioDto => {
        // acá implementación
        const table = $('#dataTable').DataTable()
        table.clear().draw()

        usuarioDto.data.forEach(usuario => {
            let fila = `
            <tr>
                <td>${usuario.id}</td>
                <td>${usuario.nombre}</td>
                <td>${usuario.username}</td>
                <td>${usuario.password}</td>
                <td>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-secondary" onclick="actualizar(${usuario.id})">Actualizar</button>
                        <button type="button" class="btn btn-secondary"onclick="eliminar(${usuario.id})">Eliminar</button>
                    </div> 
                </td>
            </tr>
            `
            // agregamos la fila y la dibujamos
            table.row.add($(fila)[0]).draw();
        });
        const btn_ingresar = document.querySelector('#btn-ingresar')
        btn_ingresar.innerHTML = "Ingresar"
        btn_ingresar.onclick = ingresar
    })
}