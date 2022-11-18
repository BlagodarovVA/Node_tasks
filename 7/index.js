const obj = require('./user');      // обращение к внешнему модулю

console.log(obj.user);
obj.sayHello();

//console.log('Привет', '\n', __dirname, '\n', __filename);

// анонимная функция вызывает сама себя
(function(require, module, exports, __filename, __dirname) {

})();