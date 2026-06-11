// const utilityexports = require('./utility')
const { add } = require('./utility')
// const addRes = utilityexports.addFn(12, 13)
const addRes = add(12, 3)
console.log(addRes);

//object destructuring

const obj = {
    id: 1,
    name: 'anil',
    salary: 1000
}

// const id = obj.id
// const salary = obj.salary

// const { id: id, salary: salary } = obj
const { id, salary } = obj

console.log(id, salary);