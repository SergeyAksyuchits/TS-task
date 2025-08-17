// 1. Создайте класс Rectangle, который содержит свойства width и height, а также метод
// getArea(), который возвращает площадь прямоугольника (ширина * высота). Создайте
// экземпляр класса Rectangle и выведите его площадь.


// interface Obj {
//     width: number
//     height: number
//     getArea(): number
// }

// class Rectangle implements Obj {
//     width: number;
//     height: number;
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }


//     getArea(): number {
//         return this.width * this.height
//     }

// }

// const rectangle = new Rectangle(5, 10)
// console.log(rectangle.getArea());


// 2.Создайте класс Calculator, который содержит методы add() (сложение), subtract() (вычитание),
// multiply() (умножение) и divide() (деление). Создайте экземпляр класса Calculator и
// выполните несколько операций.

// interface Obj {
//     a: number
//     b: number
//     add(): number
//     subtract(): number
//     multiply(): number
//     divide(): number
// }


// class Calculator {
//     a: number;
//     b: number;

//     constructor(a, b) {
//         this.a = a
//         this.b = b
//     }

//     add(): number {
//         return this.a + this.b
//     }
//     subtract(): number {
//         return this.a - this.b
//     }
//     multiply(): number {
//         return this.a * this.b
//     }
//     divide(): number {
//         return this.a / this.b
//     }

// }

// const calculator = new Calculator(2, 5)
// console.log(calculator.add());
// console.log(calculator.subtract());
// console.log(calculator.multiply());
// console.log(calculator.divide());


// 3. Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод getArea()
// (вычисление площади круга). Создайте экземпляр класса CircleR и выведите площадь
// окружности. Площадь круга: π * r^2

// interface cl {
//     radius: number
//     getArea(): number
// }


// class CircleR {
//     radius: number;
//     constructor(radius) {
//         this.radius = radius
//     }

//     getArea(): number {
//         return 3.14 * this.radius * 2
//     }
// }

// const circler = new CircleR(2)
// console.log(circler.getArea());


// 4. Создайте класс Product, который содержит объект product (продукт) с полями и price (цена
//     продукта), title (название продукта). Реализуйте метод displayProductInfo(), который выводит
//     массив продуктов, где цена > 20. Создайте экземпляр класса Product и вызовите метод
//     displayProductInfo().


// interface Obj {
//     price: number;
//     title: string;

// }

// interface cl {
//     product: Array<Obj>;
//     displayProductInfo(): Array<Obj>

// }


// class Product implements cl {
//     product = [
//         {
//             price: 20,
//             title: "яблоки",
//         },
//         {
//             price: 12,
//             title: "слива",
//         },
//         {
//             price: 22,
//             title: "бананы",
//         },
//     ];


//     displayProductInfo(): Array<Obj> {
//         const res = this.product.filter((el, obj) => el.price > 20)
//         return res
//     }
// }

// const product = new Product()
// console.log(product.displayProductInfo());




// 5. Создайте класс Library, который содержит список книг. Каждая книга представляет собой
// объект с такими свойствами, как title, author, year, genre. Класс должен содержать следующие
// методы:
// addBook(book) — добавление книги в библиотеку.
// removeBookByTitle(title) — удаление книги по названию.
// getBooksByAuthor(author) — получение всех книг, написанных определенным автором.
// getBooksByYear(year) — получение всех книг, выпущенных в определенный год.
// getBooksByGenre(genre) — получение всех книг в определенном жанре.
// interface Iobj {
//     title: string
//     author: string
//     year: number
//     genre: string
// }
// interface cl {
//     books: Array<Iobj>
// }

// class Library implements cl {

//     books: Iobj[] = [
//         {
//             title: "Война и мир",
//             author: "Толстой",
//             year: 1225,
//             genre: 'liric'
//         },
//         {
//             title: "Преступление и наказание",
//             author: "Достоевский",
//             year: 671,
//             genre: 'liric'
//         },
//         {
//             title: "Мастер и Маргарита",
//             author: "Булгаков",
//             year: 470,
//             genre: 'roman'
//         },
//         {
//             title: "Анна Каренина",
//             author: "Толстой",
//             year: 864,
//             genre: 'roman'
//         },
//         {
//             title: "Братья Карамазовы",
//             author: "Достоевский",
//             year: 796,
//             genre: 'liric'
//         },

//     ]



//     addBook(book) {
//         this.books.push(book)
//     }


//     removeBookByTitle() {
//         this.books = this.books.filter(el => el.title === "Мастер и Маргарита" ? false : true)
//         return this.books
//     }

//     getBooksByAuthor() {
//         const res2 = this.books.filter(el => el.author === "Булгаков" ? true : false)
//         return res2
//     }

//     getBooksByYear() {
//         const res2 = this.books.filter(el => el.year === 671 ? true : false)
//         return res2
//     }

//     getBooksByGenre() {
//         const res2 = this.books.filter(el => el.genre === 'liric' ? true : false)
//         return res2
//     }
// }

// const library = new Library()
// console.log(library.addBook({
//     title: "Братья Карамазовы",
//     author: "Достоевский",
//     year: 796,
//     genre: 'liric'
// }));

// console.log(library.getBooksByAuthor());
// console.log(library.getBooksByGenre());
// console.log(library.getBooksByYear());
// console.log(library.removeBookByTitle());




// 6. Создайте класс NumberStats, который будет работать с массивом чисел. Класс должен
// содержать только метод:
// getMode() — находит и возвращает моду массива чисел (самое часто встречающееся число).

// interface cl {
//     arr: number[]
//     getMode(): number
// }



// class NumberStats implements cl {
//     arr: number[]

//     constructor(arr) {
//         this.arr = arr
//     }


//     getMode(): number {

//         return this.arr.sort((a, b) => this.arr.filter((c) => c === b).length - this.arr.filter((c) => c == b).length)[0]

//     }

// }

// const numberStats = new NumberStats([1, 2, 3, 4, 2, 2, 2, 4, 5, 6])
// console.log(numberStats.getMode());



// 7. Создайте класс NumberOperations, который должен включать сам массив и методы для
// работы с массивом чисел:
// getMax() — возвращает максимальное число из массива.
// getMin() — возвращает минимальное число из массива.
// getSum() — вычисляет сумму всех чисел в массиве.
// getAverage() — вычисляет среднее значение чисел в массиве.
// getAboveAverage() — возвращает массив чисел, которые выше среднего значения.
// sortAscending() — сортирует массив по возрастанию.
// sortDescending() — сортирует массив по убыванию.

// interface num {
//     array: number;

// }

// class NumberOperations {
//     array: number[];
//     constructor(array) {
//         this.array = array
//     }


//     getMax() {
//         let max = 0
//         for (let i = 0; i < this.array.length; i++) {
//             if (this.array[i] > max) {
//                 max = this.array[i]
//             }

//         }

//     }
//     getMin() {
//         return this.array.reduce((min, el) => el < min ? min = el : min, +Infinity)
//     }
//     getSum() {
//         let sum = 0;
//         this.array.forEach((el) => sum + 1)
//         return sum
//     }
//     getAverage() {
//         let sum = 0
//         this.array.forEach((el) => sum += el){
//             return sum / this.array.length
//         }
//     }
//     getAboveAverage() {

//     }
//     sortAscending() {

//     }
//     sortDescending() {

//     }
// }

// const num = new NumberOperations([1, 2, 3, 4, 5, 6])


