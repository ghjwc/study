//  적정 몸무게 = (신장-100) * 0.9


let height = prompt("How tall are you?" , "");
let weight = prompt("What's your weight?" , "");

let ideal = (height - 100) * 0.9;

console.log(ideal);

if (weight < ideal) {
    alert("Underweight");
} else if (weight > ideal) {
    alert("Overweight");
} else if (height == '' && weight == '') {
    alert("Try Agian");
} else {
    alert("Ideal Weight")
}


// let height = prompt("How tall are you?" , "");
// let weight = prompt("What's your weight?" , "");

// let bmi = weight / (height * height);

// console.log(bmi);

// if (bmi < 18.5) {
//     alert("저체중");
// } else if (18.5 < bmi < 22.9) {
//     alert("정상 체중");
// } else if (23 < bmi < 24.9) {
//     alert("과체중");
// } else if (25 < bmi < 29.9) {
//     alert("1단계 비만");
// } else if (30 < bmi < 34.9) {
//     alert("2단계 비만");
// } else {
//     alert("3단계 비만");
// }