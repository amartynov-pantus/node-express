var jwt = require('jsonwebtoken');




function verifyToken(token){
  
  var check = false;

 jwt.verify(token, 'my_secret_key', function (err){
    if (err) {
      console.log("NO CORRECT "+token)
     check = false;
    }
    else {
      console.log("CORRECT "+token)
 check = true;
    }
  })
  return check;
  
}
module.exports = verifyToken;


// возвращаем с даанными ключа если надо

  // jwt.verify(req.token, 'my_secret_key', function (err, data){
  //   if (err) {
  //     res.sendStatus(403);
  //   }
  //   else {
  //     res.json ({
  //       text: 'THIS IS PROTECTED',
  //       data: data,
      
  //     })
  //   }
  // })