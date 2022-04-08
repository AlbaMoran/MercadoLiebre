
const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname,'public')));

app.listen(process.env.PORT || 3080, ()=> console.log('Levantando servidor en puerto 3080'));

app.get('/', function(req,res) {
    res.sendFile(path.resolve(__dirname, 'views/index.html'))
});

app.get('/register', function(req,res) {
    res.sendFile(path.resolve(__dirname, 'views/register.html'))
});
app.get('/login', function(req,res) {
    res.sendFile(path.resolve(__dirname, 'views/login.html'))
});