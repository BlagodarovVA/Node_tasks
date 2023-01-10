/** ЗАДАЧА 39 - Перебор элементов массива
 *
 * 1. Создайте функцию "cityInfo" с двумя параметрами,
 * которая возвращает строку
 * "London is at the index 0 in the myCities array"
 *
 * 2. Переберите все элементы массива "myCities",
 * для каждого элемента вызовите функцию "cityInfo"
 * и выведите в консоль результат вызова функции
 */

const myCities = ['London', 'New York', 'Singapore'];


function cityInfo(city, index) {
    return console.log(`${city} is at the index ${index} in the myCities array`);
}


cityInfo(myCities[0], 0);
console.log('---------------------------------------');


myCities.forEach((city, index) => cityInfo(city, index));