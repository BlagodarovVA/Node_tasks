const myArray1 = [0, 1, 2, 3];

myArray1.push(32);
console.table(myArray1);
console.log(myArray1.length);

/*
const myArray2 = ['ghbbdt', 'vasya', 0, 234, 'sdfs'];

console.log(myArray2);

console.log('-------------------------');
myArray2.pop();
console.log(myArray2);

console.log('-------------------------');
myArray2.unshift('first el');
console.log(myArray2);

console.log('-------------------------');
myArray2.shift();
console.log(myArray2);

console.log('-------------------------');
myArray2.forEach(elem => console.log(elem + 'privet'));
console.log('myArray2: ',myArray2);
*/

console.log('-------------------------');
const newArr = myArray1.map((elem) => {
    return elem * 3;
});
console.log('myArray1: ',myArray1);
console.log('newArr: ',newArr);