const net = require ('net');  //Se importa la clase
const server = net.createServer(); //Se importa

server.on('connection',(socket) => { 
    socket.on('data', (data) => {
        console.log('Mensaje recibido desde el cliente: ' + data)
        if (data == 'Fecha')
        {
            let hoy = new Date();
            let output = String(hoy.getDate()).padStart(2, '0') + '/'+ String(hoy.getMonth()).padStart(2,'0') + '/' + hoy.getFullYear();
            socket.write('Hoy es ' + output);

        }
        if (data == 'Hora') 
        {
            let hoy = new Date();
            let output = String(hoy.getHours()).padStart(2,'0') + ':' + String(hoy.getMinutes()).padStart(2,'0') +  ':' + hoy.getSeconds();
            socket.write('La hora actual es ' + output)
        }

        if (data=='Hola')
        {
            socket.write('Hola buenas tardes\n')
        }

        if (data == 'Servicios')
        {
            socket.write('Se cuenta con servicio de envio y enpaquetado de cualquier tipo de prenda\n')

        }
        if (data == 'Dias de servicio')
        {
            socket.write('Los dias de servicio son: \n')
            socket.write('Lunes de 8:00 A.M. a 2:00 P.M.\n')
            socket.write('Martes de 8:00 A.M a 2:00 P.M\n')
            socket.write('Miercoles sin horario de servicio\n')
            socket.write('Jueves de 8:00 A.M. a 2:00 P.M.\n')
            socket.write('Viernes de 8:00 A.M. a 2:00 P.M. \n')
            socket.write('Fin de semana sin servicio\n')
        }

        if (data =='Mas informacion')
        {
            socket.write('Por el momento no es posible obtener mas informacion sobre el servicio. Intenelo de nuevo o revise un conexion a internet\n')

        }
        if (data == 'Adios')
        {
            socket.write('Hasta pronto.')
        }
    socket.on('close',()=> {
        console.log('Comunicacion finalizada')
      })
    socket.on('error', (err) => {
        console.log(err.message)
    })

    })
})
server.listen(3000,()=>{
    console.log('servidor funcionando en el puerto', server.address().port)
})
