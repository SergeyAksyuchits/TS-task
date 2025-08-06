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







// domashnee


// 1.Преобразовать все строки в верхний регистр
// Необходимо 3 решения: for, for of, map
// const words = ['hello', 'world'];
// // Ожидается: ['HELLO', 'WORLD']

// const words: string[] = ['hello', 'world']

// let result: string[] = []
// for (let i = 0; i < words.length; i++) {
//     result.push(words[i].toUpperCase())

// }
// console.log(result);


// let result: string[] = []
// for (let el of words) {
//     result.push(el.toUpperCase())
// }
// console.log(result);

// const result = words.map(el => el.toUpperCase())
// console.log(result);




// 2.Найти строку с максимальной длиной
// Необходимо 3 решения: for, forEach, reduce
// const words = ['pen', 'notebook', 'book', 'dictionary'];
// // Ожидается: 'dictionary'

// const words: string[] = ['pen', 'notebook', 'book', 'dictionary']

// let result: string = ""

// for (let i = 0; i < words.length; i++) {
//     if (words[i].length > result.length) {
//         result = words[i]
//     }

// }
// console.log(result);


// let result: string = ""
// words.forEach((el) => {
//     if (el.length > result.length) {
//         result = el
//     }
// })
// console.log(result);

// const res = words.reduce((sum, el) => {
//     if (el.length > sum.length) {
//         return el
//     }
//     return sum
// }, "")
// console.log(res);





// 3.Подсчитать количество строк, содержащих букву “e”
// Необходимо 3 решения: for, while, и через filter и length
// const words = ['tree', 'bush', 'flower', 'grass'];
// // Ожидается: 2


// const words: string[] = ['tree', 'bush', 'flower', 'grass']

// let count: number = 0

// for (let i = 0; i < words.length; i++) {
//     if (words[i].includes("e")) {
//         count++
//     }

// }
// console.log(count);



// let count: number = 0;
// let i: number = 0
// while (i < words.length) {
//     if (words[i].includes("e")) {
//         count++
//     }
//     i++
// }
// console.log(count);


// const result = words.filter(el => el.includes("e")).length
// console.log(result);




// 15.На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]


// const arr: string[] = ['hschool', 'company']
// const res: string[] = []
// arr.forEach((el) => {
//     res.push(`!${el}`)
// })
// console.log(res);


// 16.Создайте массив чисел и определите, является ли он строго возрастающей
// последовательностью

// const arr: number[] = [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1]) {
//         console.log(true);

//     }else{
//         console.log(false);

//     }

// }



// 17.Создайте массив чисел и найдите наибольшую разницу между двумя элементами.

// const arr: number[] = [2, 8, 5, 9]
// let count: number = -Infinity
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         arr[i] - arr[j] > count ? (count = arr[i] - arr[j]) : count

//     }

// }
// console.log(count);



// 18.Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)



// interface obj {
//     title: string;
//     author: string;
//     year: number;
// }

// const books = [
//     {
//         title: "Война и мир",
//         author: "Толстой",
//         year: 1869
//     },
//     {
//         title: "Преступление и наказание",
//         author: "Достоевский",
//         year: 1866
//     },
//     {
//         title: "Мастер и Маргарита",
//         author: "Булгаков",
//         year: 1967
//     },
//     {
//         title: "Собачье сердце",
//         author: "Булгаков",
//         year: 1925
//     },
//     {
//         title: "Мёртвые души",
//         author: "Гоголь",
//         year: 1842
//     }
// ];


// const res = books.filter(el => el.author === "Булгаков")
// console.log(res);



// 19.Создайте массив объектов, представляющих книги, и отобразите книги где цена
// каждой > 50 (price – одно из полей объекта)

// interface obj {
//     title: string;
//     author: string;
//     price: number;
// }

// const books = [
//     {
//         title: "Гарри Поттер и философский камень",
//         author: "Роулинг",
//         price: 65
//     },
//     {
//         title: "Властелин колец",
//         author: "Толкин",
//         price: 80
//     },
//     {
//         title: "1984",
//         author: "Оруэлл",
//         price: 45
//     },
//     {
//         title: "Три товарища",
//         author: "Ремарк",
//         price: 55
//     },
//     {
//         title: "Маленький принц",
//         author: "Сент-Экзюпери",
//         price: 30
//     },
//     {
//         title: "Атлант расправил плечи",
//         author: "Рэнд",
//         price: 120
//     },
//     {
//         title: "Шерлок Холмс",
//         author: "Дойл",
//         price: 42
//     }
// ];

// const res = books.filter(el => el.price > 50)
// console.log(res);




// 20.Создайте массив объектов, представляющих книги, и найдите книгу с самым
// большим количеством страниц (count – одно из полей объекта)

// interface obj {
//     title: string;
//     author: string;
//     count: number;
// }



// const books = [
//     {
//         title: "Война и мир",
//         author: "Толстой",
//         count: 1225
//     },
//     {
//         title: "Преступление и наказание",
//         author: "Достоевский",
//         count: 671
//     },
//     {
//         title: "Мастер и Маргарита",
//         author: "Булгаков",
//         count: 470
//     },
//     {
//         title: "Анна Каренина",
//         author: "Толстой",
//         count: 864
//     },
//     {
//         title: "Братья Карамазовы",
//         author: "Достоевский",
//         count: 796
//     },
//     {
//         title: "Тихий Дон",
//         author: "Шолохов",
//         count: 1500
//     }
// ];

// const res = books.reduce((max, el) => {
//     if (el.count > max) {
//         return el.count
//     } else {
//         return max
//     }
// }, 0)
// console.log(res);



// 21.Напишите программу, которая находит и выводит длину наиболее длинного
// слова в заданной строке

// const text: string = "Программирование это очень увлекательная и интересная деятельность";

// const arr: string[] = text.split(' ')
// let max: number = 0

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > max) {
//         max = arr[i].length
//     }

// }
// console.log(max);


22.



// // 22Создайте массив объектов, представляющих сотрудников, с полями "имя" и
// "зарплата". Найдите среднюю зарплату всех сотрудников.



// const employees = [
//     {
//         name: "Алексей",
//         salary: 50000
//     },
//     {
//         name: "Мария",
//         salary: 65000
//     },
//     {
//         name: "Петр",
//         salary: 45000
//     },
//     {
//         name: "Елена",
//         salary: 70000
//     },
//     {
//         name: "Дмитрий",
//         salary: 55000
//     },
//     {
//         name: "Анна",
//         salary: 60000
//     }
// ];


// const res = employees.reduce((sum, el) => sum + el.salary, 0)
// console.log(res / employees.length);



// 23.Дан массив объектов с полями "название", "цена" и "количество". Найдите
// суммарную стоимостью всех товаров учитывая количество каждого.
// Итог = цена_1_товара * кол-во_1_товара + цена_2_товара * кол-во_2_товара + ...

// 23.

const products = [
    {
        name: "Хлеб",git
        price: 30,
        quantity: 2
    },
    {
        name: "Молоко",
        price: 60,
        quantity: 3
    },
    {
        name: "Яблоки",
        price: 120,
        quantity: 1
    },
    {
        name: "Сыр",
        price: 250,
        quantity: 2
    },
    {
        name: "Мясо",
        price: 400,
        quantity: 1
    }
]

const res = products.reduce((sum, el) => sum + el.quantity * el.price,0)
console.log(res);
