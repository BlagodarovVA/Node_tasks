/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

const a = [1, 2, 3]
const b = [1, 2, 3]

//console.log(a === b) // false (Почему?)

const c = [2, 1, 3]
const d = [1, 2, 3, 4]
const e = [2, 1, 3]
const f = [0, 2, 1, 3]

console.log(areArraysEqual(a, b)) // true
console.log(areArraysEqual(a, c)) // false
console.log(areArraysEqual(a, d)) // false
console.log(areArraysEqual(b, c)) // false
console.log(areArraysEqual(b, d)) // false
console.log(areArraysEqual(c, e)) // true
console.log(areArraysEqual(d, f)) // false


// 1
function areArraysEqual(firstArray, secondArray) {
    let res = true;
    if (firstArray.length !== secondArray.length) {
        return false;
    }
    
    firstArray.forEach((element, index) => {
        if (element !== secondArray[index]) {
            res = false;
        }
    });
    return res;
}

// 2
function areArraysEqual2(firstArray, secondArray) {
    if (firstArray.length === secondArray.length &&
        firstArray.every((element, index) => element === secondArray[index])) {
        return true;
    }
    return false;
}