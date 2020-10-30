# node-express

npm run start


<h1> апи</h1>

<p></p>

ПОИСК

http://10.0.30.95:3000/search?item=value

value - значение, которое ищем.


http://localhost:3000/login (admin admin)

Форма логина

http://localhost:3000//api/login

Кнопка в форме логина отправляет пост-запрос по адресу. 
сервер по этому адресу ловит пост запросы и отрабатывает условие дать токен или нет.
Когда Получишь токен, для закрытый методов он должен быть в гет-запросе в хедере authorization "xxxxxxx"  xxxxxxx - token

Тестовый закрытый метод апи

http://localhost:3000/api/protected

Каталог популярных товаров


http://localhost:3000/api/catalog/popular




