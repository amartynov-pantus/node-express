var jwt = require('jsonwebtoken');

function create(idDB){

      const user = { id: idDB }; // тут должен получить айди пользователя с БД
      const token = jwt.sign({user}, 'my_secret_key', {
      //  expiresIn: '24h' // expires in 24 hours
         })
   return token; 
}



module.exports = create;
