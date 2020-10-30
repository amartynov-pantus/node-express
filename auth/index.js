
const verifyToken = require("./verifyToken");
const create = require("./createToken");
const ensureToken = require("./getHeaderToken");
const auth = require("./authMethod");


exports.createToken = create; //создание токена
exports.verifyToken = verifyToken;             // проверка токена
exports.getHeaderToken = ensureToken; // получение токена из заголовка запроса 
exports.authMethod = auth; // сам метод авторизации


