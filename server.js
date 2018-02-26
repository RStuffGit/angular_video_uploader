var express = require('express');
var app = express();
var port = 80;

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/src'); // general config
app.set('view engine', 'html');
app.use("/node_modules", express.static('node_modules'));

app.get('/', function(request, response)  {
    response.send("OHOHO");
    // response.render('index');
});
app.use(express.static(__dirname + '/src/public'));

app.listen(port, function(err) {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log('server is listening on' + port)
});