//async function global() { 

const divide = async (a, b) => {
    const res = a / b
    if (res === Infinity) {
        const e = new Error('divisor should not be zero')
        throw e
    }
    return res
}

const add = (a, b) => a + b

async function callDivide() {
    try {
        // const p = divide(12, 3)
        // const data = await p
        const data = await divide(12,3)
        console.log(data);
        //some other ops
    } catch (e) {
        console.log(e);
    }
}
callDivide()

const addRes = add(12, 3)
console.log(addRes);
console.log('display div res now: ');
//}