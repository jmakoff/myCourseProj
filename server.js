var express = require('express');
var path = require('path');
var app = express();
//adding static files
app.use(express.static(__dirname));
//adding frontend folder
app.use(express.static(__dirname + '/frontend'));
app.all('/custom', function (req, res ) {
    res.send('First reguest found!!!')

})
app.get('/', function(req, res){
res.sendfile(path.join(__dirname, 'frontend/index.html'))/*Get default view*/
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});