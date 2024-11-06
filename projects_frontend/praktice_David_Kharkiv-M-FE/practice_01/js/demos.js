// const numbers = [1, 1, 1, 64, 4, 84, 83, 86, 96, 77, 50, 48];

// найти наименьший/наибольший ел-т в массиве

// let result = numbers[0];

// for(let i = 0; i < numbers.length; i++ ){
//     if (numbers[i] > result) {
//         result = numbers[i]
//     }
// }
// console.log(result);

// Вывести среднее арифметическое значение
// среднее арифм-ое - это сумма всех ел-тов массива

// let result = 0;

// for(let i = 0; i < numbers.length; i++ ){
//     result += numbers[i]
// }
// console.log(result / numbers.length);

// ------------------------------------------
// Оператор break

// Найти четный элемент массива, и после этого поиск прекратить.

// let result = 0;

// for(let i = 0; i < numbers.length; i++ ){
//     if (numbers[i] % 2 === 0 ) {
//         result = numbers[i];
//         break;
//     }
//     console.log('Itteration', i);
    
//     result += numbers[i];
// }
// console.log(result);

// Функции
// Возведение числа в квадрат:

// function square(digit) {
//     return digit * digit;
// }

// console.log(square(18));

// !!! ф-ция приветствия пользвателя

// написать функцию, которая приветствует пользователя. Вывести в консоль приветствие "Привет, ИМЯ_ПОЛЬЗОВАТЕЛЯ".
// Имя пользоватея получаем в аргументах функции

// function greeting(userName){
//     return "Привет, " + userName;
// }

// console.log(greeting('Petr2'));

// Написать ф-цию обратного вызова
// Написать ф-цию, которая принемает 2 аргумента: 1) число, 2)другая ф-ция, которая будет пременина к этому числу.
// x - 1 аргум-т, func - 2 аргум;

// function callback(x, func) {
//     // вертуть результат применения func к 1-му аргументу x
//     return
// }


// function square(x) {
//     return x * x;
// }

// function callback(x, func) {
//     return func(x)
// }

// const res = callback(3, square);
// console.log(res);

// ----------------------------------------------
// Массивы

// function forEach(array, callback) {
//     for( let i = 0; i < array.length; i++) {
//         callback(array[i]); 
//     }
// }

// const numbers = [1, 1, 1, 64, 4, 84, 83, 86, 96, 77, 50, 48];

// function callback (item) {
//     console.log(item);
// };

// forEach(numbers, callback);


//  function map(array, callback) {
    // ..
    // Вернуть новый массив, который будет сщстоять из результатов применения функции callback к эл-там массива
//  }

//  function map(array, callback) {
//     let result = [];
//     for (let i = 0; i < array.length; i++) {
//         result[i] = callback(array[i]);
//     }
//     return result;
//  }

//  function double(x) {
//     return x * 2;
//  }

// const numbers = [1, 1, 1, 64, 4, 84, 83, 86, 96, 77, 50, 48];

// let result = map(numbers, double);

// console.log(numbers);
// console.log(result);


// ------------------------
// Написать ф-цию поиска

// function find( array, callback) {
//     // ...
//     // вернуть первый ел-т массива, для которого ф-ция callback вернет true
// }

function find( array, callback) {
    let result;
    for(let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            result= array[i];
            break;
        }
    }
    return result;
}

let numbers = [1, 1, 1, 64, 4, 84, 83, 86, 96, 77, 50, 48];

function divThree(x) {
    return x % 3 === 0;
}

console.log(find(numbers, divThree));



