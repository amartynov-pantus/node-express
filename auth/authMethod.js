const createToken = require("./createToken");

function auth(log, pass){
    if (log === 'admin' && pass === '6667') {
        //Создание токена для ИД  пользователя
        let token = createToken(1); // !!! сделать тот ИД который получу от БД
        return token;

    } else {
        //  response.sendStatus(403);
        return undefined;
    }
}
module.exports = auth;