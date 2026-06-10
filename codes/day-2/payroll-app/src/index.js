const anilDev = new Developer(1, "Anil", 1000, 2000, 3000, 4000)
const sunilHr = new Hr(2, "Sunil", 1500, 2500, 3500, 4500)

employees.push(anilDev, sunilHr)

for (let index = 0; index < employees.length; index++) {
    const e = employees[index]
    e.calculateSalary()
    console.log(`Total salary of ${e.name} is ${e.total}`);
}