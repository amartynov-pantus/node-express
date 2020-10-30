// поиск имя по айтему

function searchItemName(data, find_word){

    var jsObj = JSON.parse(JSON.stringify(data));
    var find = find_word.toString();
    var values = Object.keys(jsObj.items).filter(function(x) {
      return jsObj.items[x].models.indexOf(find) > -1;
    }).map(function(x) {
      return jsObj.items[x].name;
    });
   // console.log(values.length > 0 ? values[0] : "not found");
    return (values.length > 0 ? values[0] : "not found");
}

module.exports = searchItemName;