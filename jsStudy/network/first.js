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
    }, 1000);
}

myFunc(0, function (r) {console.log(r)});

console.log("start"); //콜백 지옥
myFunc(0, function (r) {
    console.log(r);
    myFunc(r, function (r) {
        console.log(r);
        myFunc(r, function (r) {
            console.log(r);
            myFunc(r, function (r) {
                console.log(r);
                myFunc(r, function (r) {
                    console.log(r);
                    myFunc(r, function (r) {
                        console.log(r);
                        console.log("end");
                    });
                });
            });
        });
    });
});

//어떤 작업
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//프라미스 객체

function myPro(num) {
    //결과가 성공, 실패 따져서 실행시켜 줌
    let promise = new Promise((resolve, reject) => {
        setTimeout(()=> {
            let r = num + 10;
            if (r > 50) { //error
                let e = new Error("너무 많음!");
                reject(e);
            }
            resolve(r);
        }, 1000)
    });

    return promise; //약속 : 작업을 보증
}

myPro(0).then(r => {
    console.log('pro:' + r);
    return myPro(r);
})
.then(r => {
    console.log('pro:' + r);
    return myPro(r);
})
.then(r => {
    console.log('pro:' + r);
    return myPro(r);
})
.then(r => {
    console.log('pro:' + r);
    return myPro(r);
})
.then(r => {
    console.log('pro:' + r);
    return myPro(r);
})
.then(r => {
    console.log('pro:' + r);
    return myPro(r);
}).catch (e => {
    console.log(e);
});

//await, async

async function start() {
    try {
        let r = await myPro(0);
        console.log('async: ' + r);
        r = await myPro(r);
        console.log('async: ' + r);
        r = await myPro(r);
        console.log('async: ' + r);
        r = await myPro(r);
        console.log('async: ' + r);
        r = await myPro(r);
        console.log('async: ' + r);
        r = await myPro(r);
        console.log('async: ' + r);
        r = await myPro(r);
        console.log('async: ' + r);
    } catch (e) {
        console.log(e);				
    }
}

start();

//resolve > then
//reject > catch