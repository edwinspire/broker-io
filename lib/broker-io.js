"use strict";
const sio = require('socket.io')();
const dojo = require('@dojo/core');



const EventEmitter = require('events');

class dms extends EventEmitter {

  server (channels){

    this._addChannel('log');

    channels.forEach(function(ch) {
      _addChannel(ch);
    });

    sio.on('connection', function(socket){

      console.log("Conectado");

    });


    sio.listen(3000);
  }

  _login (nsp, socket){
    socket.emit('connected', true);
    return true;
  }

  _addChannel(channel){

    let nsp = sio.of(channel).on('connection', (socket)=>{

      if(this._login(nsp, socket)){
      //  console.log('someone connected', socket);
      console.log("Conectado al canal "+channel);

      socket.on('rec', (rec)=>{
        console.log("Crecl "+rec);
      });


      setInterval(()=>{
        console.log(channel);
        socket.emit('devuelve', dojo.DateObject.now().toString());
      }, 1000);

    }else{
        // deberia enviar alguna señal para que se desconecte
      }

    });


    console.log('Agregado canal '+channel); // Aqui deberiamos agregar a un log que se ha agregado un canal
  }

}

module.exports = dms;