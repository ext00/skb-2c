var express = require('express');
var app = express();
var cors = require('cors');
var parseUri = require('./lib');

app.use(cors());
app.get('/2c', function (req, res) {
	const username = req.query.username
	const uri = parseUri.parseUri(username);
  	const file = uri.file;
  	console.log(uri);
  	res.send('@' + file.replace(/^@*(.*)@*$/, '$1'));//.replace(/^\/*(.*)\/*$/, '$1'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!!!!');
});