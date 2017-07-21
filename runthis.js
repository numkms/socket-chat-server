var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
http.listen(3000, function(){
    console.log('Express has been started and listen 3000 port');
});
app.get('/', function(req, res){
    res.sendFile(__dirname + '/frontend/chat.html');
});
//Connect handler with callback
io.on('connection', function(socket){
    console.log('anonymous user connected');
});
//Yes is hack but whatever we need just one style
app.get('/css/main.css', function(req, res){
    res.sendFile(__dirname + '/frontend/css/main.css');
});