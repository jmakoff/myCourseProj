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
app.use(function(req, res, next) {
    res.status(404).setHeader('401');
    res.status(404).send('H111');

});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});