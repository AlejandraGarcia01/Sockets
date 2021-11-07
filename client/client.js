const net = require ('net');
const readline = require('readline-sync'); //objeto para leer una linea
const servidor = { //variable servidor en la que se declara el puerto y la conexion
    port:3000,
    host: 'localhost'
}

const client = net.createConnection(servidor); //se crea una conexion con el servidor

client.on('connect',()=> {
    console.log('Conexion satisfactoria')
    sendLine() //Funcion para enviar una linea de texto
})
client.on('data',(data) => {
    console.log('El servidor dice: ' + data)
    if (data != "Hasta pronto.")
    {
        sendLine()
    }
})
client.on('error',(err) => {
    console.log(err.message)
})
function sendLine(){
    var line = readline.question('\n ingresa un mensaje \n')
    if (line ==0) {
        client.end()
    } else {
        client.write(line)
    }
}