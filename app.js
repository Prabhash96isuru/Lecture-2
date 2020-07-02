var http = require('http');
var dateTime = require('get_date');

var server = http.creatteServer(function(reqest, respond){
    if(reqest.url ==='/'){
        respond.write('<html>');
        respond.write('<head><title>API_Exersice</title></head>');
        respond.write('<body>Exersice_01</body>');
        respond.write('</html>');
        respond.end();
    }
    else if(reqest.url==='/home'){
        respond.write('<html>');
        respond.write('<head><title>HOME</title></head>');
        respond.write('<body><h1>Home Page</h1><p>Welcome to My Page<>/p</body>');
        respond.write('</html>');
        respond.end();
    }
    else if(reqest.url==='/about'){
        respond.write('<html>');
        respond.write('<head><title>ABOUT</title></head>');
        respond.write('<body><h1>About Page</h1><p>Welcome to the About Page </body>');
        respond.write('</html>');
        respond.end();
    }
    else if(reqest.url==='/time'){
        respond.write('<html>');
        respond.write('<head><title>TIME</title></head>');
        respond.write('<body><h1>Date and Time</h1><h3>Date : '+dateTime()+'</h3></br><h3>Time : '+dateTime(true)+'</h3></body>');
        respond.write('</html>');
        respond.end();
    }
    else{
        respond.write('<html>');
        respond.write('<head><title>404 Not Found</title></head>');
        respond.write('<body><h3>404 Not Found</h3></body>');
        respond.write('</html>');
        respond.end();
    }

});

server.listen(3000);
console.log('Listening to port : 3000');
server.on('connection', function(soclet){

});