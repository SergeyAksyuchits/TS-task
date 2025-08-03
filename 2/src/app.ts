// 1.Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.

// const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let res: number = 0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//         res += arr[i]
//     }

// }
// console.log(res);


// 2.Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'.

// const arr: string[] = ['banana', 'apple', 'kiwi']

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes('a')) {
//         console.log(arr[i]);

//     }

// }


// 3.На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива

// const arr: number[] = []

// for (let i = 0; i < 5; i++) {
//     arr.push(+prompt())

// }
// let sum:number=0
// arr.forEach((el)=>sum+=el)




// let sum:number =0
// let i:number  =0
// do {
//     sum+=arr[i]
//     i++
// } while (i<arr.length-1);



// let i:number =0
// let sum:number =0
// while(i===arr.length-1){
//     sum+=arr[i]
//     i++
// }


// let sum:number=0;
// for(let el of arr){
//     sum+=el
// }



// let sum:number=0
// for (let i = 0; i < arr.length; i++) {
//     sum+=arr[i]

// }

// const res = arr.reduce((sum, el) => {
//     return sum + el
// }, 0)
// console.log(res);


// 4.Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.


// const arr: string[] = []

// for (let i = 0; i <5; i++) {
//     arr.push(prompt())

// }
// const res = arr.some((el) => {
//     return el.length > 5
// })

// console.log(res);


// 5.Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2.

// const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const res = arr.filter((el) => {
//     return el % 3 === 0 && el % 2 !== 0

// })
// console.log(res);


// 6.Создайте массив строк и объедините все элементы в одну строку без пробелов.

// const arr: string[] = [];

// for (let i = 0; i < 3; i++) {
//     arr.push(prompt())

// }

// console.log(arr.join(''));


// 7.На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел. 

// const arr: number[] = []

// for (let i = 0; i < 5; i++) {


// }

// 8.Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.

// const arr: string[] = []


// for (let i = 0; i < 3; i++) {
//     arr.push(prompt())

// }
// const res = arr.some((el) => {
//     if (el == el.split("").reverse().join('')) {
//         return true
//     }
// })
// console.log(res);


// 9.Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения

// const arr: (string | number)[] = []

// for (let i = 0; i < 4; i++) {
//     arr.push(prompt())

// }

// let result: (string | number)[] = []
// let i: number = 0
// while (i < arr.length) {
//     if (!result.includes(arr[i])) {
//         result.push(arr[i])
//     }
//     i++
// }
// console.log(result);




// let result: (string | number)[] = []
// for (let el of arr) {
//     if (!result.includes(el)) {
//         result.push(el)
//     }
// }
// console.log(result);



// let result: (string | number)[] = []
// for (let i = 0; i < arr.length; i++) {

//     if (!result.includes(arr[i])) {
//         result.push(arr[i])

//     }

// }
// console.log(result);


// 10.Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы

// const arr: string[] = []
// const str: string[] = ['a', 'e', 'i', 'o', 'u']

// for (let i = 0; i < 3; i++) {
//     arr.push(prompt())
// }

// let res: string[] = []
// for (let i = 0; i < arr.length; i++) {

//     const result = arr[i].split('').filter((el) => {
//         return str.includes(el)

//     })
//     res.push(result.join(''))

// }
// console.log(res);


// 11.На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты

// const arr: string[] = []
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// for (let i = 0; i < 3; i++) {
//     arr.push(prompt())

// }

// const res = arr.every((el) =>  emailRegex.test(el) 

// )
// console.log(res);


// 12. Создайте массив чисел и найдите сумму элементов, находящихся на нечетных
// позициях (индексах) массива.

// const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let count: number = 0

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 !== 0) {
//         count += arr[i]
//     }

// }

// console.log(count);



// 13.. На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]

// const arr: number[] = []

// for (let i = 0; i < 6; i++) {
//     arr.push(+prompt())

// }

// const res = arr.map((el) => {
//     if (el % 2 == 0) {
//         return `чет`
//     } else {
//         return `нечет`
//     }
// })
// console.log(res);

// 14.Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.


// const str: string = 'aaa111ffqqqqq'
// let obj: any = {};

// for (let i = 0; i < str.length; i++) {
//     if (!obj[str[i]]) {
//         obj[str[i]] = 1


//     } else {
//         obj[str[i]] += 1
//     }

// }
// // console.log(obj);

// let count: number = 0
// let value: string = ''
// for (let key in obj) {
//     if (obj[key] > count) {
//         count = obj[key]
//         value = key
//     }
// }
// console.log(value);
// console.log(count);


