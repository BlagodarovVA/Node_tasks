/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
    {
        carBrand: 'Honda',
        price: 38000,
        isAvailableForSale: false
    },
    {
        carBrand: 'Rover',
        price: 1500,
        isAvailableForSale: true
    },
    {
        carBrand: 'BMW',
        price: 14000,
        isAvailableForSale: true
    }
];

console.table(cars);

const newCar =
    {
    carBrand: 'Lexus',
    price: 72000,
    isAvailableForSale: false,
    Color: 'SkyBlue'
    };

    
cars.push(newCar);

console.table(cars);