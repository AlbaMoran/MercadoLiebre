
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname,'public')));

app.listen(3000, ()=> console.log('Levantando servidor en puerto 3000'));

app.get('/', function(req,res) {
    res.sendFile(path.resolve(__dirname, 'views/index.html'))
});
