// //метод получения списка популярных товаров

const request = require('request');


function getPopularProdductData() {
    var popularIdArray = [];
    return new Promise((resolve) => {
        const url = 'https://www.pantus.ru/api/rest/2.0/popular/'; //
        var answer = '';

        request({
            method: 'GET',
                json: true,
            url: url,
            // параметры GET-запроса

            qs: {

            }
        },
            function (error, response, body) {
            try {
                if (!error && response.statusCode == 200) {
                  //  answer = body


                    resolve(body);
                }
                else {
                 //   throw 'no response by '+url;
                  //  console.log("ERRRRRRRRRRRRRRRR")
                    popularIdArray.push({error: 'no response by '+url})
                   // console.log("ERRRRRRRRRRRRRRRR "+ popularIdArray)

                    resolve(popularIdArray);

                }
            }
            catch (e) {
            throw e;
            }
        })

    });
}

module.exports = getPopularProdductData;