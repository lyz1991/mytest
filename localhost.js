/**
 * Created by wxh-user on 2016/2/9.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
app.post('/app/api', multipartMiddleware, function(req, resp) {
    console.log(req.body, req.files);
});


app.use(express.static("./"))

app.listen(3010,function(){
    console.log(1)
})