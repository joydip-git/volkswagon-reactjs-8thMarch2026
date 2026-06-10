class Employee {
    constructor(id, name, basic, da, hra) {
        this.id = id
        this.name = name
        this.basic = basic
        this.da = da
        this.hra = hra
        this.total = 0
    }
    calculateSalary() {
        this.total = this.basic + this.da + this.hra
    }
}