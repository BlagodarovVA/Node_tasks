const path = require('path');

console.log(path.basename(__filename));     // имя файла
console.log(__filename);                    // абсолютный путь
console.log(path.dirname(__filename));      // путь без файла
console.log(path.extname(__filename));      // расширение файла

console.log(path.parse(__filename));        // объект с инфой о файле

console.log(path.join(__dirname, 'test', 'second.html'));   // генерация пути
console.log(path.resolve(__dirname, './test', 'second.html'));       // делает корректный путь