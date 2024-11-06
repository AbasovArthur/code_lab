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



