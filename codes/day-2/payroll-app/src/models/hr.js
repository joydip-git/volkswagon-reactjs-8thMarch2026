class Hr extends Employee {
    constructor(id, name, basic, da, hra, gratuity) {
        super(id, name, basic, da, hra)
        this.gratuity = gratuity
    }
    calculateSalary() {
        super.calculateSalary()
        this.total += this.gratuity
    }
}