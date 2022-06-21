let img = document.querySelector('#img');
console.dir(img);

let i = 0; //flag
// 연속적인 자료를 배열에 저장
// 배열은 index로 값을 읽음
// length 속성 있음 (배열의 크기)
// 배열 + for문

let arrImgs = [
    'https://i.ibb.co/wKGVKR2/27.jpg',
    'https://i.ibb.co/kGyqRRN/6-1.jpg',
    'https://i.ibb.co/XCZwzFt/5.jpg'
]

console.dir(arrImgs);

setInterval(function() {
    // if (i == 0) {
    //     img.src = "";
    // } else if (i == 1) {
    //     img.src = "";
    // } else if (i == 2) {
    //     img.src = "";
    // }
    // i = i >= 2 ? 0 : ++i;
    
    while (true) {
        img.src = arrImgs[i];
        i = i >= 2 ? 0 : ++i;
    }
    console.log(i);
}, 1000);
