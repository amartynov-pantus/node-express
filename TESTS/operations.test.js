

var getallcatalog = require('../methods-api/catalog/getallcatalog'); 
 
it("Метод АПИ getallcatalog", function(){
     
    var expectedResult = JSON.stringify([1,2,3]);
    var result  = getallcatalog([1,2,3]);
    if(expectedResult !== result ){

        throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
});


