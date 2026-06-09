//function global(){
//console.log(x); //undefined
let x
x = 10
console.log(x); //10

for (let i = 0; i < 1; i++) {
    let x
    x = 20
    console.log(x); //20
    if (true) {
        let x = 30
        console.log(x);
    }
}

console.log(x); //20 or 10

//}
//global()
let z
let y = x + z
console.log(y, typeof y);

let res = 12 / 0
console.log(res, typeof res);

let obj = null
console.log(obj, typeof obj);