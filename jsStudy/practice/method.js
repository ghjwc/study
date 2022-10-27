let user = {
    name: 'John',
    age: 30,

    toString() {
        return `{name: '${this.name}', age: ${this.age}};`
    }
};

console.log('user: ', user);

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

console.log('student: ', student);
console.log('typeof: ', typeof json);
console.log('json: ', json);

console.log(JSON.stringify('test'));