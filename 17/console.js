// console.log(process.argv);

function consoleToJSON() {
    const c = {};

    for (let i = 2; i < process.argv.length; i++) {
        const arg = process.argv[i].split('=');
        // ключ - arg[0], значение arg[1]. 
        // Если есть первый элемент, тогда добавляем. Если не передавали, то примет true
        c[arg[0]] = arg[1] ? arg[1] : true;
    }

    return c;
}

console.log(consoleToJSON());