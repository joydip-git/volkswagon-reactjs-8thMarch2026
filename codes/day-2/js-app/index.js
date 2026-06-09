class Person {
    constructor(idVal, nameVal, salaryVal) {
        this.id = idVal
        this.name = nameVal
        this.salary = salaryVal
    }
    print() {
        return this.id + ' ' + this.name + ' ' + this.salary
    }
}
const anilObj = new Person(1, 'anil', 1000)
console.log(anilObj.print());

