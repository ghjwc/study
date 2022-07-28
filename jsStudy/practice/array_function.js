let names = [
    'Steven Paul Jobs',
    'Bill Gates',
    'Mark Elliot Zuckerberg',
    'Elon Musk',
    'Jeff Bezos',
    'Warren Edward Buffett',
    'Larry Page',
    'Larry Ellison',
    'Tim Cook',
    'Lloyd Blankfein'
]

// forEach
names.forEach((item, index) => {
    console.log('forEach:', item, index);
})

// map
let namesMap = names.map((item, index) => {
    return item;
})
console.log('map:', namesMap); //map은 배열로 출력되기 때문에 변수 선언을 해줘야 한다.

let ceoList = [
    {name: 'Larry Page', age: 23, ceo: true},
    {name: 'Tim Cook', age: 40, ceo: true},
    {name: 'Elon Musk', age: 55, ceo: false}
]

let ceoListMap = ceoList.map((item) => {
    return item.age;
})
console.log('map:', ceoListMap);

// filter
let ceoListFilter = ceoList.filter((item) => {
    return item.age == 23;
})
console.log('filter:', ceoListFilter);

let namesFilter = names.filter((item) => {
    return item.startsWith('L');
})
console.log('filter:', namesFilter);


// some
let namesSome = names.some((item) => {
    return item.startsWith('A'); // true or false로 return됨 (하나라도 있으면 true를 return)
})
console.log('some:', namesSome); //false

let namesSome2 = names.some((item) => {
    return item.length > 0;
})
console.log('some:', namesSome2); //true

// every
let namesEvery = names.every((item) => {
    return item.startsWith('L'); // some처럼 boolean 값을 반환하지만 하나라도 있으면 true인 some과 달리 every는 모든 값이 존재해야 함
})
console.log('every:', namesEvery); //false

let namesEvery2 = names.every((item) => {
    return item.length > 0;
})
console.log('every:', namesEvery2); //true

//find
let namseFind = names.find((item) => {
    return item.startsWith('L');
})
console.log('find:', namseFind);

/*
filter와 find의 차이
filter: 결과를 배열에 담음
        조건에 속하는 값 전부 return
find: 해당 값 하나만 출력
        첫 번째로 찾은 하나만 return
        정확한 값 하나만 찾기에 좋다.
*/

// findIndex
let namesFindIndex = names.findIndex((item) => {
    return item == 'Larry Page';
})
console.log('findIndex:', namesFindIndex); //index 번호 return

