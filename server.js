var express = require('express');
var app = express();
var port = 3000;

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/app'); // general config
app.set('view engine', 'html');
app.use("/node_modules", express.static('node_modules'));

app.get('/', function(request, response)  {
    response.render('index');
});
app.use(express.static(__dirname + '/app/public'));

app.listen(port, function(err) {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log('server is listening on' + port)
});