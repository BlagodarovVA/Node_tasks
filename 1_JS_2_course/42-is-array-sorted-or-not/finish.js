/** ЗАДАЧА 42 - Проверка сортировки массива
 *
 * 1. Создайте функцию "arraySortInfo" с одним параметром - "inputArray"
 *
 * 2. Если хотя бы один элемент в массиве не является числом - вернуть "Некоторые элементы не являются числами"
 *
 * 3. Если числа в массиве отсортированы по возрастанию - вернуть "Массив отсортирован по возрастанию"
 *
 * 4. Если числа в массиве отсортированы по убыванию - вернуть "Массив отсортирован по убыванию".
 *
 * 5. Если массив не отсортирован - вернуть "Массив не отсортирован"
 */

const a = [5, 'abc', 10, 1]
const b = [4, 10, 14, 25, 25, 50]
const c = [150, 132, 80, 40]
const d = [15, 26, 10, 23, 85]

console.log(arraySortInfo(a)) // Некоторые элементы не являются числами
console.log(arraySortInfo(b)) // Массив отсортирован по возрастанию
console.log(arraySortInfo(c)) // Массив отсортирован по убыванию
console.log(arraySortInfo(d)) // Массив не отсортирован


function arraySortInfo(inputArray) {
    const allIsNumbers = (currentValue) => typeof currentValue == 'number';
    const arrSortedToUp = (currentValue, index) => 
            index > 0 ? currentValue >= inputArray[index - 1] : true;
    const arrSortedToDown = (currentValue, index) => 
            index > 0 ? currentValue <= inputArray[index - 1] : true;
    

    console.log(inputArray);

    if (!inputArray.every(allIsNumbers)) {
        return 'Некоторые элементы не являются числами';
    }
    if (inputArray.every(arrSortedToUp)) {
        return 'Массив отсортирован по возрастанию';
    }
    if (inputArray.every(arrSortedToDown)) {
        return 'Массив отсортирован по убыванию';
    }
    if (!inputArray.every(arrSortedToDown) && !inputArray.every(arrSortedToUp)) {
        return 'Массив не отсортирован';
    }
}

/**
 * ПОДСКАЗКИ
 *
 *
 *
 *
 * Подсказка 1: Используйте метод массивов "every"
 * Подсказка 2: Вы должны использовать два параметра в колбэк функции "element", "index"
 * Подсказка 3: Каждый элемент массива, кроме первого, следует сравнивать с предыдущим
 */
