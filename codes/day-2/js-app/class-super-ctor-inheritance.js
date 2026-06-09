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
class Trainer extends Person {
    constructor(idVal, nameVal, salaryVal, subjectVal) {
        super(idVal, nameVal, salaryVal)
        this.subject = subjectVal
    }
    print() {
        return super.print() + ' ' + this.subject
    }
}
const anilObj = new Trainer(1, 'anil', 1000, 'JavaScript')
console.log(anilObj.print());

