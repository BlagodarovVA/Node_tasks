/** ЗАДАЧА 72 - Копия массива
 *
 * Создайте копию массива.
 * При изменении копии массива оригинальный массив не должен изменяться
 */

const a = [1, 2, 3]

// Напишите код здесь

// 1
// const b = a.slice();

// 2
const b = [...a];

// 3
// const b = Array.from(a)

// 4 - глубокая копия
// const b = JSON.parse(JSON.stringify(a));


b.push('newElement')

console.log(a)
// [1, 2, 3]

console.log(b)
// [1, 2, 3, "newElement"]
