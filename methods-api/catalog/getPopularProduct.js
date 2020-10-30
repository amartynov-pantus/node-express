//метод формирования списка популярных товаров
const getData = require('../DB/remote/methods-api/getPopularProduct')

//jsonResponse();

async function popularProduct() {
    try {

        var answer;
        var  popularIdArray=[];
    console.log(await getData());
   //     return await getData();
answer=await getData();

console.log(answer)

        for (var id in answer.data) {
            popularIdArray.push({
                productid : answer.data[id].id,
                productname : answer.data[id].name,
                img: answer.data[id].images['main'],
                manufacturername: answer.data[id].manufacturer['name'],
                articul: answer.data[id].sku,
                oem: answer.data[id].oem.list,
                priceretail: answer.data[id].offer.prices['retail'],
                quantity: answer.data[id].offer['quantity']
            });
        }

        return popularIdArray;
    }
    catch (e) {
        return e
    }
}
module.exports = popularProduct;

