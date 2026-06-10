const anilDev = new Developer(1, "Anil", 1000, 2000, 3000, 4000)
const sunilHr = new Hr(2, "Sunil", 1500, 2500, 3500, 4500)
const joyDev = new Developer(3, "Joydip", 2000, 3000, 4000, 5000)
const maheshHr = new Hr(4, "Mahesh", 100, 200, 300, 400)

employees.push(anilDev, sunilHr,joyDev, maheshHr)

for (let index = 0; index < employees.length; index++) {
    const e = employees[index]
    e.calculateSalary()
    //console.log(`Total salary of ${e.name} is ${e.total}`);
}

// const salaryCriteria = (e) => e.total > 10000
// const sortCriteria = (e1, e2) => e1.name.localeCompare(e2.name)
// const printLogic = (e) => console.log(`Total salary of ${e.name} is ${e.total}`)

// const filteredEmplyees = employees.filter(salaryCriteria)
// const sortedEmployees = filteredEmplyees.sort(sortCriteria)
// sortedEmployees.forEach(printLogic)

// employees
//     .filter(salaryCriteria)
//     .sort((e1, e2) => e1.name.localeCompare(e2.name))
//     .forEach(printLogic)

employees
    .filter((e) => e.total > 10000)
    .sort((e1, e2) => e1.name.localeCompare(e2.name))
    .forEach((e) => console.log(`Total salary of ${e.name} is ${e.total}`))


    console.log('end of app');