import { Employee } from "./employee"

export class Developer extends Employee {
    constructor(id, name, basic, da, hra, incentive) {
        super(id, name, basic, da, hra)
        this.incentive = incentive
    }
    calculateSalary() {
        super.calculateSalary()
        this.total += this.incentive
    }
}