// 1. Напиши функцию wrapInArray<T>, которая принимает значение любого типа и возвращает массив, содержащий это значение.
// wrapInArray(5) // [5]
// wrapInArray("hi") // ["hi"]


// function wrapInArray<T>(a: T) {
//     return [a]
// }

// console.log(wrapInArray<string>("hi"));
// console.log(wrapInArray<number>(5));




// 2. Напиши функцию printKey<T, K extends keyof T>, которая принимает объект и ключ, и выводит значение этого ключа.
// printKey({name: "Alex", age: 25}, "name") // Alex


// function printKey<T, K>(obj: T, str: K) {
//     if (typeof str === "string" && typeof obj === "object")
//         return obj[str]
// }
// interface Obj {
//     name: string;
//     age: number;
// }
// console.log(printKey<Obj, string>({ name: "Alex", age: 25 }, "name"));


// 3. Напиши функцию mergeObjects<T, U>, которая объединяет два объекта в один.
// mergeObjects({a: 1}, {b: 2}) // {a: 1, b: 2}



// function mergeObjects<T, U>(obj1: T, obj2: U) {
//     return { ...obj1, ...obj2 }
// }
// interface Obj {
//     a: number
// }
// interface Obj2 {
//     b: number
// }

// console.log(mergeObjects<Obj, Obj2>({ a: 1 }, { b: 2 }));



// 4. Напиши функцию doubleOrRepeat<T>, которая:
//  • Если T — число, возвращает число, умноженное на 2
//  • Если T — строка, возвращает строку, повторённую дважды
// doubleOrRepeat(5) // 10
// doubleOrRepeat("Hi") // "HiHi"


// function doubleOrRepeat<T>(a: T) {
//     if (typeof a === "number") {
//         return a * 2
//     } else if (typeof a === "string") {
//         return a + a
//     }
// }

// console.log(doubleOrRepeat<number>(5));
// console.log(doubleOrRepeat<string>("Hi"));


// 5.Функция transformArray<T>:
//  • Если массив чисел — возводит каждый элемент в квадрат
//  • Если массив строк — переводит в верхний регистр
// transformArray([2, 3]) // [4, 9]
// transformArray(["hi", "go"]) // ["HI", "GO"]

// function transformArray<T>(a: T) {
//     if (Array.isArray(a)) {
//         const res = a.map(el => {
//             return typeof el == "string" ? el.toUpperCase : el ** 2;

//         })

//     }
// }

// console.log(transformArray<number[]>([2, 3]));
// console.log(transformArray<string[]>(["hi", "go"]));



// 6.Функция maxOrLongest<T>:
//  • Если числа — возвращает максимальное
//  • Если строки — возвращает самую длинную
// maxOrLongest([3, 8, 5]) // 8
// maxOrLongest(["a", "hello", "hi"]) // "hello"

// function maxOrLongest<T>(arr: T) {
//     if (Array.isArray(arr)) {

//         const res: string | number = arr.reduce((max, el) => {
//             if (typeof el == "number") {
//                 return el > max ? (max = el) : max
//             }
//             if (typeof el == "string") {
//                 return el.length > max.length ? (max = el) : max
//             }
//         })
//         console.log(res);

//     }
// }

// maxOrLongest<number[]>([3, 8, 5]);
// maxOrLongest<string[]>(["a", "hello", "hi"]);



