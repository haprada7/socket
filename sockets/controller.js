const socketController=(id_socket)=>{
console.log('Cliente conectado',id_socket.id);

id_socket.on('disconnect',()=>{
    console.log('Cliente desconectado',id_socket.id);
})

id_socket.on('enviar-mensaje',(payload,callback)=>{
    const id=123456789
    callback(id)
    console.log(payload);

    id_socket.broadcast.emit('mensaje-servidor', payload)
})
}

export {socketController}