// 1.У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10


// interface Obj {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }


// const items: Obj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]



// const result: Obj[] = items.filter(el => el.count > 10)
// console.log(result);



// 2. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары в обратном порядке


// interface Obj {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }


// const items: Obj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]


// let res: Obj[] = items.reverse()
// console.log(res);




// 3.У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести только те товары из положения, количество которых внутри массива
// кратно 3



// interface Obj {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }


// const items: Obj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// const res: Obj[] = items.filter(el => el.count % 3 == 0)
// console.log(res);



// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести итоговую стоимость на складе.
// Итоговая стоимость = количество * цена + ...

// interface Obj {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }


// const items: Obj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]



// const res: number = items.reduce((sum: number, el: Obj) => {
//     return sum + (el.count * el.price)


// }, 0);
// console.log(res);




// 5. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом

// interface Obj {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }


// const items: Obj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// const res: Obj = items.reduce((max: Obj, el: Obj) => {
//     return el.price > max.price ? el : max
// })
// console.log(res);




// 6. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов



// interface Obj {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
// }


// const items: Obj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]


// const res: number = items.reduce((sum: number, el: Obj) => (sum + el.price), 0)

// console.log(res / items.length);



// 7. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением


// interface Obj {
//     id: number;
//     title: string;
//     count: number;
//     price: number;
//     result?: number;
// }


// const items: Obj[] = [
//     { id: 1, title: 'Часы', count: 10, price: 500 },
//     { id: 2, title: 'Смартфон', count: 33, price: 1500 },
//     { id: 3, title: 'Моноблок', count: 6, price: 2200 },
//     { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
//     { id: 5, title: 'Планшет', count: 22, price: 2100 },
// ]

// let max: number = 0

// const res = items.map((el) => ({ ...el, result: el.count * el.price }))

// const maxValue = res.reduce((max, el) => el.result > max.result ? el : max)
// console.log(maxValue);



// 8. У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту


// const mail: string[] = [
//     "nikita_123@mail.ru",
//     "hanna_123@mail.ru",
//     "artem_123@mail.ru",
//     "sergey_123@mail.ru",
//     "nikita_123@mail.ru",
//     "artem_123@mail.ru",
//     "darya_123@mail.ru",
// ];
// const newArray: string[] = []

// function checkEmail(): string[] {
//     try {
//         for (let i = 0; i < mail.length; i++) {
//             if (typeof mail[i] !== 'string') throw new Error("error type");

//             if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/gm.test(mail[i])) throw new Error("error");

//             if (!newArray.includes(mail[i])) {
//                 newArray.push(mail[i])

//             }
//         }
//         return newArray
//     } catch (error) {
//         console.log(error.message);

//     }
// }

// console.log(checkEmail());






