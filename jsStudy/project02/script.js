let inputNum = document.querySelector('#inputNum');
//     resultNum = parseInt(inputNum.value);

// console.log(resultNum);

const numBtn = document.querySelectorAll('.num');
let index = 0;

numBtn[index].addEventListener('click', function (e) {
    // for (let )

    console.log(this.innerText);
    inputNum.value = this.value;
});