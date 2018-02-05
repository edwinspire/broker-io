const io = require('socket.io-client');
const dojo = require('@dojo/core');


const ioc = io("http://localhost:3000/log");


console.log(dojo.DateObject.now().toString());

ioc.on('devuelve', function(socket){
  console.log('a user connected', socket);
  ioc.emit("rec", "Recibido");
});

