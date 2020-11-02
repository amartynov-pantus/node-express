var express = require('express');
var app = express();

//exports.app;

// Add headers
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, authorization');    
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// создаем парсер для данных application/x-www-form-urlencoded

const auth = require ("./auth/index"); // авториз
const routersApi = require ("./methods-api/routers"); // апи методы

  app.get('/', function (req, res) {
  res.send('Hello World!');  
  });

  app.options('/', function (req, res) {
  	res.send('');  
  });

  app.get('/help', function (req, res) {
    res.sendFile('public/help.html' , { root : __dirname});    
  });

  app.options('/help', function (req, res) {
  	res.send('');  
  });

  app.get('/login', function (req, res) { //тестовая форма лооина
    res.sendFile('public/login.html' , { root : __dirname});    
  });

  app.options('/login', function (req, res) {
  	res.send('');  
  });

  app.post('/auth/login', function(request, response){
    //метод авторизации
  var token = auth.authMethod(request.body.login, request.body.password);
  if (token !== undefined) {
  response.json({
          token: token
        })
  }
  else {response.sendStatus(403);}
  });
  app.options('/auth/login', function (req, res) {
  	res.send('');  
  });


  app.use('/api', routersApi); // кидаем все апи всё на маршрутизатор
  app.options('/api/*', function (req, res) {
  	res.send('');  
  });


  app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});
  



