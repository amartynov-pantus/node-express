const getallcatalog = require ('./getallcatalog');
const searchItemCatalog = require ('./searchitemcatalog');
const get = require('./getallcatalog');
const testProt = require('./testProtectedMethod');
const getPopularProduct = require('./getPopularProduct');

exports.getallcatalog = get; //получить весь каталог товаров
exports.searchItemCatalog = searchItemCatalog; //поиск по каталогу
exports.testProt = testProt;
exports.getPopularProduct = getPopularProduct; // получить список популярных продуктов
