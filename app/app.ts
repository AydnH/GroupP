import express = require('express');

const app: express.Application = express();

app.get('/', function(req, res){
	res.send('sending function');
});

app.listen(3000, function(){
	console.log('this is on port 3000');
});