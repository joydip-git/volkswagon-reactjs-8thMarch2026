var x = 10
console.log(x);

//static type checking:
//inferring the data type of x from the assigned value which is 'number'
//hence no other data type value can be assigned to x
//x = 'joydip'


//strict typing:
//no need to mention the data type in the following line as TS will use type inference to understand the data type of a from the assigned value
const a: string = 'joydip'

function add(a: number, b: number): number {
    return (a + b)
}

//typification of method (required in case of callback)
//fnRef -> a method with two arguments, both of type number and returns a number

//create a custom type for a function in TS
type FnType = (m: number, n: number) => number

//create a custom type for a function in TS using interface
interface FnTypeDef {
    (m: number, n: number): number
}

function invoke(fnRef: FnType, x: number, y: number) {
    console.log(fnRef(x, y))
}
function call(fnRef: FnTypeDef, x: number, y: number) {
    console.log(fnRef(x, y))
}

invoke(add, 10, 20)
invoke((a, b) => a - b, 10, 2)

//custom type created from existing type(s)
type myType = boolean | number | string;

let value: myType = false
value = 123
value = 'joydip'


//creating custom data type for an object typification
type Employee = {
    id: number,
    name: string,
    basic: number,
    da: number,
    hra: number,
    //extra: number | undefined,
    extra?: number,
    calculateSalary: () => number
}
//creating custom data type using interface
interface Person {
    id: number;
    name: string;
    basic: number;
    da: number;
    hra: number;
    extra?: number;
    calculateSalary(): number;
}
const anilObj: Employee = {
    id: 100,
    name: 'anil',
    basic: 1000,
    da: 2000,
    hra: 3000,
    extra: 4000,
    calculateSalary: function () {
        return this.basic + this.da + this.hra + (this.extra ? this.extra : 0)
    }
}

console.log(anilObj.calculateSalary());

//interface with abstract operations
interface Operations {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}

class Calculator implements Operations {
    add(a: number, b: number): number {
        return a + b
    }
    subtract(a: number, b: number): number {
        return a - b
    }
}

interface A { }
interface B { }

interface Clubbed extends A, B { }

type AType = {}
type BType = {}

type ClubbedType = AType & BType

interface Repository<T> {
    add(data: T): void;
}

type GenericFnType<T, TResult> = (a: T, b: T) => TResult

class CommonRepository<TModel> implements Repository<TModel> {
    add(data: TModel): void {
        //code   
    }
}

