const input = document.querySelector('.form__input');
const btn = document.querySelector('.form__btn');


btn.addEventListener('click', () => {
    setTimeout(() => {
        if (input.value === 'google') {
            alert('Yandex круче. Но это не точно')
        }
    }, 3000);
});


btn.addEventListener('click', () => {
    alert(arr[0].name);
    alert(input.value);
});


const arr = [
    obj1 = {
        name: 'Ann',
        age: 33
    },
    obj2 = {
        name: 'Bob',
        age: 32
    },
    obj3 = {
        name: 'Tom',
        age: 35
    },
    obj4 = {
        name: 'Kate',
        age: 38
    }
];


function superSum(a, b) {
    return (a + b);
}

alert(superSum(23, 32));


const numbersArray = [58, 5, 11, 77, 44, 22, 111, 2, 21];

let min = null;
let max = null;
for (let i = 0; i < numbersArray.length; ++i) {
    if (min === null || min > numbersArray[i]) min = numbersArray[i];
    if (max === null || max < numbersArray[i]) max = numbersArray[i];
}
console.log('максимальное: ' + max, 'минимальное: ' + min);


let a = 'XXX';
let b = 'YYY';
//  первый
[b, a] = [a, b];
//  второй
a = [a, b];
b = a[0];
a = a[1];
//  третий
b = [a, a = b][0];
//  четвертый
c = [a, b];
a = c[1];
b = c [0];
console.log(a);
console.log(b);


let array = [32, 41, -213, 1234, 3, 15, -1, -34, 77];

function findMax() {
    let i;
    let max = null;
    for (i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

console.log(findMax());
