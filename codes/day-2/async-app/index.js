const divide = (a, b) => {
    const p = new Promise(
        (resolveFnRef, rejectFnRef) => {
            const res = a / b
            if (res === Infinity) {
                const e = new Error('divisor should not be zero')
                //throw e
                rejectFnRef(e)
            }

            //return res
            resolveFnRef(res)
        }
    )
    return p
}

const add = (a, b) => a + b

const p = divide(12, 3)
p
    .then(
        (data) => {
            console.log(data); 
            //return data
            //do some other ops
        }
    )
    .catch(
        (e) => { console.log(e); }
    )

const addRes = add(12, 3)
console.log(addRes);
console.log('display div res now: ');