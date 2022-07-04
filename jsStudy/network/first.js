// 동기, 비동기
// 프로세스, 스레드(작업의 가장 작은 단위)
// js 단일(싱글) 스레드
// setTimeout, setInterval : 비동기로 만들 수 있음 (브라우저 함수, web api) - C, C++

// 비동기 처리 방식

function callback() {
    console.log('call');
}

setTimeout(callback, 3000); //콜백 지옥 = 프라미스 = await = ascyn
console.log('End');

for (let i = 0; i < 10; i++) { //먼저 실행이 끝남 i = 10
    setTimeout(function() {
    console.log(i)
    }, 1000 * i);   
}

let i = 0,
    timer = null;

function run() {
    console.log(i++);

    if (i == 5) {
        clearTimeout(timer);
        return;
    }
    timer = setTimeout(run, 1000); //재귀함수
}
run();


// 콜백 지옥
function myFunc(num, callback) {
    setTimeout(() => {
       let r = num + 10;
       if (callback) {
        callback(r);
       }
    }, 3000);
}

myFunc(0, function (r) {console.log(r)});

console.log('start');
myFunc(0, function (r) {
    console.log(r)
    myFunc(r, function (r) {
        console.log(r);
    });
});

function myPro(num) {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
           let r = num + 10;
           if (r > 50) {
            let e = new Error('too much');
            reject(e);
           }
           resolve(r); 
        }, 1000);
    });
    return promise;
}

//resolve > then
//reject > catch

myPro(0).then(num => {
    console.log(`pro ${r}`);
});