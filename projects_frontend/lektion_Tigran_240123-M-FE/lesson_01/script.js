let a = NaN

console.log(typeof (a));
console.log(typeof a == ''); 
//      - number
//      - false

// Неявные преобразования
// Все что мы пытаемся прибавить(+) к строке - итоговый ответ будет(=) СТРОКА
// преобразование разных типов данных
// let a = 'test' + 10
//      - test10

// let a = 'test' + false
// let a = 'test' + undefined
//      - string
//      - testundefined

// let a = 'test' + undefined

// boolean
// Булевый тип
// let a = false - 10
//      - number
//      - -10
// При попытке сложить булиевый тип с числом - булиевое значение пробразуется в бинарный тип ( 0 fals 1 true ) 
// И далее будет расчитываться математическое выр-е
/*
let a = false - 10

console.log(typeof a);
console.log(a);
*/
// ---------------------
// Преобразование строки в число
//  1) вариант
// let a = '100' -?

// let a = Number('100') 
// Number
// Boolean
// String

// Особенности типов данных и преобразования в JavaScript
// https://habr.com/ru/articles/709048/
// null
// undefined
// boolean
// number
// string
// object
// symbol
// BigInt
//      - number
//      - 100

// 2)
// let a = '100' -?

// let a = +'100' 
//      - number
//      - 100

// Преобразование числа в строку
// 1 Вариант
// let a = String(100)
//      - string
//      - 100

// 2 Вариант
// let a = '' + 100
//      - string
//      - 100


// console.log(typeof a);
// console.log(a);



