//constructor function
function person(idVal, nameVal, salaryVal) {
    const x = 100
    this.id = idVal
    this.name = nameVal
    this.salary = salaryVal
    this.print = function () {
        return this.id + ' ' + this.name + ' ' + this.salary
    }
    return this
}

function trainer(idVal, nameVal, salaryVal, subjectVal) {
    person.call(this, idVal, nameVal, salaryVal)
    this.subject = subjectVal
    this.print = function () {
        return this.id + ' ' + this.name + ' ' + this.salary + ' ' + this.subject
    }
    return this
}
const joyObj = new trainer(1, 'joy', 1000, 'JavaScript')
console.log(joyObj);

const anilObj = new trainer(2, 'anil', 2000, 'Java')
console.log(anilObj);
//console.log(global);