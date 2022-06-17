
const btn = document.querySelector('#inputBtn');

btn.addEventListener('click', addFruits);

function enterPressed(e) {
    if (e.keyCode == 13) {
        addFruits();
    }
}

let fruits = [];

function addFruits() {
    
    let inputOnes = document.querySelector('#newFruit').value;
    let newUl = document.querySelector('#fruitUl');

    if (inputOnes == '') {
        return;
    } else {
        fruits = document.createElement('li');
        fruits.innerText = inputOnes;
        newUl.appendChild(fruits);
        document.querySelector('#newFruit').value = '';
    }

    const del = document.createElement('button');
    del.innerHTML = '&times';
    fruits.appendChild(del);
    
    del.onclick = function(e) {
        let pnode = e.target.parentNode;
        newUl.removeChild(pnode);
    }
    
}