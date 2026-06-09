//object literal syntax
const obj = {
    //value properties
    id: 1,
    name: 'joydip',
    salary: 1000,

    //functional property
    print: function () {
        return this.id + ' ' + this.name + ' ' + this.salary
    }
}

console.log(obj.id);
console.log(obj['name']);
console.log(obj.print());

obj.location = 'Bangalore'
obj.sayHello = function () {
    return 'hello ' + this.name
}

console.log(obj['location']);
console.log(obj.sayHello());

console.log(obj);



