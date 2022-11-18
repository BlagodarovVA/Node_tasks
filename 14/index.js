const http = require('http');

// создание сервера
// req - запрос на сервер
// res - ответ сервера
const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, {                // описание для header
            'Content-Type': 'text/html'
        });
        // ответ
        res.end(`
            <h1>Form</h1>
            <form method="post" action="/">
                <input name="title" type="text" />
                <button type="submit">Send</button>
            </form>
        `)
    } else if (req.method === 'POST') {
        const body = [];
        // описание для header, кодировка
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        // прослушиваем дату (буфер) и формируем цельный массив из чанков
        req.on('data', data => {
            body.push(Buffer.from(data));
        });

        req.on('end', () => {
            console.log(body.toString());
            const message = body.toString().split('=')[1];

            res.end(`
                <h1>Ваше сообщение: ${message}</h1>
        `)
        });
    }

});


// запуск сервера
const PORT = 3000;
server.listen(PORT, () => {    // (порт, функция выполняемая после запуска сервера)
    console.log(`Сервер бегает и смотрит на порт ${PORT}...`);
});
