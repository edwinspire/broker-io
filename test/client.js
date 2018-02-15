const io = require('socket.io-client');
const dojo = require('@dojo/core');


const ioc = io("http://localhost:3000/public/test");


console.log(dojo.DateObject.now().toString());

ioc.on('log', function(socket){
  console.log('a user connected', socket);
  ioc.emit("log", {inicio: dojo.DateObject.now(), fin: 'Estamos probando'});
});

