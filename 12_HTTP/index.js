const http = require('http');

// создание сервера
// req - запрос на сервер
// res - ответ сервера
const server = http.createServer((req, res) => {
    console.log(req.url);

    res.write('<h1>Hello from NodeJS</h1>');
    res.write('<h2>Hello from NodeJS</h2>');
    res.write('<h3>Hello from NodeJS</h3>');
    // ответ обязательно закрывать
    res.end(`
        <div style="background: red; width: 200px; height: 50px;">
            <h1>Test</h1>
        </div>
    `);                      
});

// запуск сервера
const PORT = 3000;
server.listen(PORT, () => {    // (порт, функция выполняемая после запуска сервера)
    console.log(`Сервер занялся бегом на порту ${PORT}...`);
});
