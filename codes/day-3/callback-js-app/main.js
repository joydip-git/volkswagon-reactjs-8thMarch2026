const numbers = [1, 7, 2, 6, 3, 8, 4, 9, 5, 0]
const names = ['joydip', 'sunil', 'anil']

//functional programming
//pure function (filter, sort, forEach etc.)
//no side effect (since the original imput to every method is not mutated)
//chaining the methods helps to create a pipeline of operations
numbers
    .filter((num) => num % 2 === 0)
    .sort((a, b) => a - b)
    .map((num) => `Value: ${num * 3}`)
    .forEach((numStr) => console.log(numStr))
