/*
let array = [1, 2, 3, 4, 5, 6, 7]
let obj = {
    name: 'Alex'
}
*/
// console.log(typeof obj);

//написать проверку, является ли массив массивом

//напишите ф-цию, которая получает массив и выводит в консоль инфо, массив это или нет
/*
function checkArrey(array){
    if(?) {
        console.log('да');
        
    } else {
        console.log('нет');
        
    }
}
*/
/*
function checkArrey(array){
    if(Array.isArray(array)) {
        console.log('да');
    } else {
        console.log('нет');
        
    }
}

checkArrey(array)
checkArrey(obj)

console.log("короткая запись ", (Array.isArray(array)) ? 'да' : 'нет');
*/

//Напишите ф-цию checkObj(obj), которая будет отличать объект от всех типов данных
//Если в ф-цию передать объект в консоль необходимо вывести ответ "Это объект"
//в противном случае "это не обьект"
/*
function checkObj(obj){

    // if(Array.isArray(obj) == true){

    if(!Array.isArray(obj) && typeof obj == 'object'){
        console.log("Это объект");
    } else {
        console.log("Это не объект");
    }
}
checkObj(obj)
checkObj({name: 'Axel'})
checkObj([1,2,3])
checkObj('string')
checkObj(10)
*/

// --------------------------

// простые методы (мутируют массив)

// let array = [1, 2, 3, 4, 5, 6, 7]

// push()       - добавляет новый эл-т в конец массива 
// unshift()    - добавляет эл-т сначала массива
// pop()        - удаляет эл-т с конца массива
// shift()      - удаляет эл-т с начала массива

// array.push(8)
/*
[ 1, 2, 3, 4, 5, 6, 7, 8 ]
*/

// array.unshift(0)
/*
[ 0, 1, 2, 3, 4, 5, 6, 7, ]
*/

// array.pop()
/*
[ 1, 2, 3, 4, 5, 6, ]
*/

// array.shift()
/*
[ 2, 3, 4, 5, 6, 7 ]
*/
// console.log(array);

//------------------------------
/*
console.log(array.shift());
console.log(array);
*/
//      - 1                         (показал удаляемый  эл-т)
//      - [ 2, 3, 4, 5, 6, 7 ]      (показал оставшиеся эл-ты)

//------------------------------

let array = [1, 2, 3, 4, 5, 6, 7]



