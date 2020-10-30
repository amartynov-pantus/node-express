
var express = require('express');
const router = express.Router(); // Создаем роутер
const testDB = require('./testDB');
const tempPopularProductDB = require('./DB/remote/methods-api/getPopularProduct'); // !!! сделать логику в дб/локал от туда брать сформированный джейсон


const catalog = require ('./catalog/index') //методы апи с каталогом
const auth = require ("../auth/index"); // аутентификац


router.get('/catalog/getallcatalog', function(req, res) {  
  res.send(catalog.getallcatalog(testDB));    
});


router.get('/catalog/searchitem', function (req, res) {
    //http://10.0.30.95:3000/api/catalog/searchitem?item=
    console.log('dddddddddddddddd')
   res.send(catalog.searchItemCatalog(testDB, req.query.item)); 
});


  router.get('/catalog/testprotected', auth.getHeaderToken, function (req, res){
   // защищённый метод

    if (auth.verifyToken(req.token)) {
            res.json ({
          text: catalog.testProt() 
        })
    }
    else {
           res.sendStatus(403);
    }
  });


  router.get('/catalog/popular', function (req, res) {
// список популярных продуктов
      async function sendPopularProduct () {
          res.json ({
              data: await catalog.getPopularProduct()
          })
      }
      sendPopularProduct();

  });

module.exports = router