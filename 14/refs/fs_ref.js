const fs = require('fs');
const path = require('path');

// создать папку асинхронно
// fs.mkdir(path.join(__dirname, 'notes'), err => {
//     if (err) throw err;

//     console.log('Папка создана');
// });


// создать файл
/*
fs.writeFile(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    'Hello world',
    (err) => {
        if (err) throw err;
        console.log('Файл создан');

        fs.appendFile(
            path.join(__dirname, 'notes', 'mynotes.txt'),
            '\n2 From append file',
            (err) => {
                if (err) throw err;
                console.log('Файл обновлён');

                // чтение файла
                fs.readFile(
                    path.join(__dirname, 'notes', 'mynotes.txt'),
                    'utf-8',
                    (err, data) => {
                        if (err) throw err;
                        console.log(data);
                        //console.log(Buffer.from(data).toString());    // без указания кодировки в начале
                    }
                );
            }
        );
    }
);
*/


// переименование файла
fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    (err) => {
        if (err) throw err;
        
        console.log('Файл переименован');
    }
);
