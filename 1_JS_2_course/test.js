const obj = {
    userId: 1,
    id: 1,
    title: "Test title",
    status: {
        completed: false
    }
}

//const obj2 = Object.assign({}, obj);
const obj2 = {...obj};
obj2.id = 2;
obj2.status.completed = true;

console.log(obj);
console.log(obj2);

