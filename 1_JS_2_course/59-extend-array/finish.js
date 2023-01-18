/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

class ExtendedArray extends Array {
    sum() {
        return this.reduce((sum, elem) => sum + elem, 0);
    }

    onlyNumbers() {
        return this.filter(elem => typeof elem === 'number');
    }
}


let newArr = new ExtendedArray(1, 2, 7);
let newArr2 = new ExtendedArray(false, 10, 'dds', 3);

console.log(newArr)
console.log(newArr2)
console.log(newArr.sum());
console.log(newArr2.sum());
console.log(newArr.onlyNumbers());
console.log(newArr2.onlyNumbers());

newArr.forEach(element => {
    console.log('---', element);
});