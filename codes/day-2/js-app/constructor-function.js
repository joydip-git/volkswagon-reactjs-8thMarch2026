//constructor function
function person(idVal, nameVal, salaryVal) {
    var x = 100
    this.id = idVal
    this.name = nameVal
    this.salary = salaryVal
    this.print = function () {
        return this.id + ' ' + this.name + ' ' + this.salary
    }
}

const joyObj = new person(1, 'joy', 1000)