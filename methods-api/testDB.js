myObj = {
    "id":30,
    "name_category":"Сайлентблок",    
    "items": [
        { "name":"Ford", "models":[ "Fiesta", "Focus", "Mustang" ] },
        { "name":"BMW", "models":[ "320", "X3", "X5" ] },
        { "name":"Fiat", "models":[ "500", "Panda" ] }
     ]
 } 

function get(jsonArr){
return jsonArr;
}

module.exports = get(myObj);