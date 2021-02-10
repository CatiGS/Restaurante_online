/**
 * Programación Funcional
 */

// USUARIOS
let usuario = {
    nombre: 'Pepe',
    edad: 41
}

// Pedido Actual
let pedido = []
    // respuesta obtenida del cliente
let respuesta = ""

// MOSTRAR MENÚ
const mostrarMenu = () => {
    document.writeln("<table width=50%>")
    document.writeln("<caption>CARTA RESTAURANTE</caption>")
    document.writeln("<thead><tr> <th> Codigo</th> <th> Plato </th> <th> Precio </th></tr></thead>")
    document.writeln("<tbody>")
    CARTA.forEach(plato => {
        document.writeln("<tr><td>" + plato.cod + "</td> <td>" + plato.nombre + "</td><td>" + plato.precio + "€</td></tr>")
    })
    document.writeln("</tbody></table>")
}
const leerPedido = () => {
    document.writeln("<form method='post' id='formulario'><p>Teclea código plato</p>")
    document.writeln('<input type = "text" id="codigo" value="">')
    document.writeln('<input type = "button" id="submit" value="Enviar">')
    document.writeln('<div id="mensaje_error"> </div>')
    document.writeln('<div id="pedido"> </div>')
    document.writeln('<div id="tituloresultado"><h1>Resumen de lo que ha pedido</h1></div>')
    document.writeln('<div id="resultado"></div>')
    document.writeln('<div id="total"></div></form>')
}
const pedidoDelUsuario = (elegir) => {
        document.getElementById("mensaje_error").innerHTML = ""
        if (!elegir) document.getElementById("mensaje_error").innerHTML = "<h3>Código introducido no válido!!</h3>"

        let producto = (CARTA.find(ped => (elegir === ped.cod)))
        if (!producto) document.getElementById("mensaje_error").innerHTML = "<h3>El plato no existe en la carta!!</h3>"
        pedido.push(producto)
        document.getElementById("pedido").innerHTML = "<p> Hola " + usuario.nombre + ", Has pedido " + producto.nombre + " y su precio es " + producto.precio + "€ </p>"
    }
    // CALCULAR PEDIDO
const calcularPedido = () => {
        let total = 0 // resetear
        for (product of pedido) {
            total += product.precio
        }
        return total
    }
    // VER PEDIDO
const verPedido = () => {
    let mostrarPedido = ""
    for (ped of pedido) {
        mostrarPedido += ped.cod + " - " +
            ped.nombre + " - " +
            ped.precio +
            "€<br>"

    }
    return mostrarPedido
}

mostrarMenu()

leerPedido()

document.getElementById("submit").addEventListener("click", () => {
    let codigo = document.getElementById("codigo").value
    pedidoDelUsuario(codigo)
    document.getElementById("resultado").innerHTML = verPedido()
    document.getElementById("total").innerHTML = 'El total es:' + calcularPedido()
})