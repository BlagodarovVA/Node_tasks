fetch('https://jsonplaceholder.typicode.com/todos/55')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.error(error))