"use strict";
const sio = require('socket.io')();
const EventEmitter = require('events');

class dms extends EventEmitter {



  server (channels){

    this._addChannel('log');

    channels.forEach(function(ch) {
      _addChannel(ch);
    });
    sio.listen(3000);
  }

  _login (nsp, socket){
    socket.emit('connected', true);
    return true;
  }

  _addChannel(channel){

    let nsp = sio.of(channel);
    nsp.on('connection', function(socket){

      if(this._login(nsp, socket)){
        console.log('someone connected', socket);
      }else{
        // deberia enviar alguna señal para que se desconecte
      }

    });

    console.log('Agregado canal '+channel); // Aqui deberiamos agregar a un log que se ha agregado un canal
  }

}

module.exports = dms;