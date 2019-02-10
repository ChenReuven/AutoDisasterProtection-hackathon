'use strict';

const five = require('johnny-five');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

let board, button, buttonWhite, led, count;

app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res, next) {
  res.sendFile(__dirname + '/dashboard.html');
});

board = five.Board({
  port: "COM5"
});

board.on('ready', function () {

  console.log('Arduino is ready.');
  led = new five.Led(13);
  button = new five.Button(2);
  buttonWhite = new five.Button(3);


  board.repl.inject({
    button: button,
    buttonWhite: buttonWhite,
    led: led
  });
  let count = 0;


  // Listen to the web socket connection
  io.on('connection', function (client) {
    count = 0;
    client.on('join', function (handshake) {
      console.log(handshake);
      /*
      Emite la informacion que ya está guardada en el servidor al cliente
      para posteriormente ponerla en los campos
      */
      // NO USAR broadcast AQUÍ
      client.emit('defaultValues', {"test": "test"});
    });

    button.on("down", function() {
        console.log("down");
        let data = {
          lat: 11111,
          lng: 22222,
          title: "Fire On Place",
          label: "F"
        }
        led.blink(500);
        client.emit('Fire', data);
    });

    buttonWhite.on("down", function(){
      console.log("buttonWhite down");
      led.off();
      led.stop();
      client.emit('Not Fire');    
    });

    // button.on("up", function() {
    //   console.log("up");
    //   led.stop();
    //   client.emit('Not Fire');
    // });
  });
});

const port = process.env.PORT || 3000;

server.listen(port);
console.log(`Server listening on http://localhost:${port}`);
