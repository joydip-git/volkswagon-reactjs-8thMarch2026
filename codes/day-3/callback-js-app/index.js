//pure function
function filterValues(arr, fnRef) {
    const result = []
    for (const element of arr) {
        const isTrue = fnRef(element)
        if (isTrue) {
            result.push(element)
        }
    }
    return result
}

function sortValues(arr, fnRef) {
    //spread operator (...) -> ES6
    const result = [...arr]
    for (let i = 0; i < result.length; i++) {
        for (let j = i + 1; j < result.length; j++) {
            const compResult = fnRef(result[i], result[j])
            if (compResult > 0) {
                const temp = result[i]
                result[i] = result[j]
                result[j] = temp
            }
        }
    }
    return result
}

//source of data
const numbers = [1, 7, 2, 6, 3, 8, 4, 9, 5, 0]
const names = ['joydip', 'sunil', 'anil']

const res = filterValues(numbers, (num) => num % 2 === 0)
const finalRes = sortValues(res, (a, b) => a - b)

const nameres = filterValues(names, (name) => name.toLocaleLowerCase().includes('n'))

const finalNameres = sortValues(
    nameres,
    (name1, name2) => name1.toLocaleLowerCase().charCodeAt(0) - name2.toLocaleLowerCase().charCodeAt(0))

//logic to filter the source of data
//function declaration
// function isEven(num) {
//     return num % 2 === 0 //? true : false
// }
// const ascSortLogic = function (a, b) {
//     return a - b
// }
// const evenNumbers = filterValues(numbers, isEven)
// const sortedEvenNumbers = sortValues(evenNumbers, ascSortLogic);

//console.log('sorted even numbers in asc');
// for (const index in sortedEvenNumbers) {
//     const value = sortedEvenNumbers[index]
//     console.log(value);
// }

//function expression
// const isOdd = function (num) {
//     return num % 2 !== 0
// }
// const descSortLogic = function (a, b) {
//     return b - a
// }

// const oddNumbers = filterValues(numbers, isOdd)
// const sortedOddNumbers = sortValues(oddNumbers, descSortLogic);

// console.log('sorted odd numbers in desc');
// for (const index in sortedOddNumbers) {
//     const value = sortedOddNumbers[index]
//     console.log(value);
// }


// const nameWithnLogic = function (name) {
//     return name.toLocaleLowerCase().includes('n')
// }
//arrow function
// const sortAlphabeticallyAsc = (name1, name2) => name1.charCodeAt(0) - name2.charCodeAt(0)

// const namesIncludeN = filterValues(names, nameWithnLogic)
// const sortedNamesIncludeN = sortValues(namesIncludeN, sortAlphabeticallyAsc)

// console.log('sorted names in asc');
// for (const name of sortedNamesIncludeN) {
//     console.log(name);
// }
