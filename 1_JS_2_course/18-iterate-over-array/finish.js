/** ЗАДАЧА 18 - Перебор элементов массива
 *
 * 1. Создайте массив с несколькими элементами
 *
 * 2. Используя один из методов массивов, переберите все элементы
 * и выведите каждый элемент в консоль
 */

 const arr = ['PriveT!', 32, true, null, undefined];

 arr.forEach(element => {
    console.log(element, '-', typeof element);
});