'use strict';
//1. Создайте массив arr = [‘a’, ‘b’, ‘c’, ‘d’] и с его помощью выведите на экран строку ‘a+b, c+d’.
/*
const arr = ['a', 'b', 'c', 'd'];
const str = arr.join();
const newStr = str.replace(/,/gi, function (value, index) {
    if(index % 2 !== 0 && index !== 3){
        return '+'
    }
    else return ',';

});
console.log(newStr)
 */

//2. Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной
/*
const arr1 = [2, 5, 3, 9];
const arr2 = arr1.splice(2, 2);

console.log(arr1,arr2);

function multiplyArr(arr1, arr2) {
    const result = arr1.reduce(
        function (acum, item) {
            acum *= item ;
            return acum;
        },
        [1]
    )
    const result2 = arr2.reduce(
        function (acum, item) {
            acum *= item ;
            return acum;
        },
        [1]
    )
    const resultMultiply = result + result2;
    console.log(resultMultiply);
}

multiplyArr(arr1, arr2);
 */

//3. Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива.
/*
const arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
const newArr = arr.flat();
const result = newArr.find(function(item, index, array){
    if (item >= 4 ) {
        return true;
    }
    else {
        return false;
    }
});
console.log(result);
 */

//4. Дан объект {js:[‘jQuery’, ‘Angular’], php: ‘hello’, css: ‘world’}. Выведите с его помощью слово ‘jQuery’.
/*
const obj = {
    js: ['jQuery', 'Angular'],
    php: 'hello',
    css: 'world'
}
console.log(obj.js[0]);
 */

//5. Заполните массив следующим образом: в первый элемент запишите ‘x’, во второй ‘xx’, в третий ‘xxx’ и так далее.
/*
const arr = [];
let str = 'x';
for (let i = 0; i < 10; i++) {
    arr.push(str);
    str += 'x';
}
console.log( arr);
 */


//6. Заполните массив следующим образом: в первый элемент запишите ‘1’, во второй ’22’, в третий ‘333’ и так далее.
/*
const arr = [];
let str = '';
for ( let i = 1; i < 11; i++){
    for ( let a = 0; a < i; a++) {
        str += String(i);
    }
    arr.push(str);
    str = '';
}
console.log(arr);
 */

//7. Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым — сколько элементов должно быть в массиве. Пример: arrayFill(‘x’, 5) сделает массив [‘x’, ‘x’, ‘x’, ‘x’, ‘x’].
/*
function arrFill (value, index, arr=[] ) {
    for (let i = 0; i < index; i++) {
        arr.push(value);
    }
    return arr;
}
console.log(arrFill('x', 5));
 */

//8. Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 10) {
        console.log((i + 1));
        break;
    }
}
 */

//9. Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
/*
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr = [];
for ( let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
}
console.log( newArr);
 */

//10. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
/*
const arr = [[1, 2, 3], [4, 5], [6]];
let sum = arr
.flat()
.reduce(function (acc, item) {
    acc +=item;
    return acc;
    },
    0
)
console.log(sum);
 */

//11. Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
/*
const arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
let sum = arr
    .flat(2)
    .reduce(function (acc, item) {
            acc +=item;
            return acc;
        },
        0
    )
console.log(sum);
 */





