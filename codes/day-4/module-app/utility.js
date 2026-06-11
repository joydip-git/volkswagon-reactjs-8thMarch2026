const add = (a, b) => a + b
const subtract = (a, b) => a - b
const numbers = [1, 2, 3, 4, 5]

//v1
// module.exports = {
//     addFn: add,
//     subFn: subtract,
//     numArr: numbers
// }

//v2
// module.exports = {
//     add: add,
//     subtract: subtract,
//     numbers: numbers
// }

//v3
module.exports = {
    add,
    subtract,
    numbers
}
//console.log(module);