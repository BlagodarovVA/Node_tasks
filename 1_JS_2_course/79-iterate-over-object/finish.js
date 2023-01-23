/** ЗАДАЧА 79 - Перебор свойств объекта
 *
 * 1. Создайте функцию "sumObjectValues", которая будет суммировть
 * все значения свойств, которые являются числами.
 *
 * 2. Сумму чисел необходимо вернуть из функции
 *
 * 3. Убедитесь, что итерация выполняется только
 * по собственным свойствам объекта
 */

const objectWithNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
}


// function sumObjectValues(obj) {
//   let sum = 0;
//   Object.values(obj).forEach(val => {
//         if (typeof val === 'number') {
//           sum += val;
//         }
//       });
//   return sum;
// }


function sumObjectValues(obj) {
  return Object.values(obj).reduce(
    (accum, val) => typeof val === 'number' ? accum + val : accum,
  0);

}


const result = sumObjectValues(objectWithNumbers)
console.log(result)
//42
