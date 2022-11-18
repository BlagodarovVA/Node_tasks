const EventEmitter = require('events');

class Logger extends EventEmitter {     // класс наследуется от эмиттера
    log(message) {
        this.emit('message', `${message} ${Date.now()}`);   // генерация события
    }
}

const logger = new Logger();            // создание экземпляра класса

logger.on('message', data => {          // создание события
    console.log(data);
});


logger.log('Hello');
logger.log('Hello');
logger.log('Hello');
