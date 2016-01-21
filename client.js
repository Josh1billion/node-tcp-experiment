// Load the TCP Library
net = require('net');

var client = net.connect(5000, '127.0.0.1', function() {
    client.write('hello world');

    client.on('data', function(data) {
        console.log(data.toString('utf8'));
    });


    // Remove the client from the list when it leaves
    function disconnected() {
        console.log('disconnected');
    }
    socket.on('error', function(err) { disconnected(); });
    socket.on('end', disconnected);
});

