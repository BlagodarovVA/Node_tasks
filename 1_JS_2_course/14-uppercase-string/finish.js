/** ЗАДАЧА 14 - Строка заглавными буквами
 *
 * 1. Создайте переменную и присвойте ей любую строку
 *
 * 2. Убедитесь что значение этой переменной НЕ является экземпляром String
 * Используйте для этого оператор "instanceof"
 *
 * 3. Убедитесь что значение этой переменной имеет тип "string"
 *
 * 4. Создайте другую переменную и ее значением должно быть значение
 * первой переменной заглавными буквами
 *
 * 5. Выведите в консоль значение второй переменной
 */

let str1 = 'sdfsg sdfhdsg sldhg eroih 3425';
console.log(str1 instanceof String);
console.log(typeof(str1));

let str2 = str1.toUpperCase();
console.log(str2);

console.log('---------------------');
let myString = new String('sjflsf sdjsdf er234');
console.log(myString instanceof String);
console.log(typeof(myString));
console.log(myString.toUpperCase());
