const createToken = require("./createToken");

function auth(log, pass){
    if (log == 'admin' && pass == 'admin')
    {
      //Создание токена для ИД  пользователя
      var token=createToken(1); // !!! сделать тот ИД который получу от БД
   return token;
      console.log("TOKEN "+token);  
    }
    else {
      //  response.sendStatus(403);
      return undefined;
    }
}
module.exports = auth;