const user = {
    name: 'Elena',
    age: 25
};

// данная переменная не будет видна во внешке, т.к. не экспортируется
const user2 = {
    name: 'Igor'
};

module.exports = user;  // экспорт данных в другие файлы

module.exports = {
    user: user,
    sayHello() {
        console.log('-------- Hello from undercover --------');
    }
};


