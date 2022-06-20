
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

    // function cb() {
    //     const checkbox = document.createElement('input');
    //     checkbox.type = 'checkbox';

    //     checkbox.addEventListener('change', (event) => {
    //         if (event.currentTarget.checked) {
    //             Text.style.textDecoration = 'line-through';
    //         } else {
    //             Text.style.textDecoration = 'none';
    //         }
    //     })
    //     fruits.appendChild(checkbox);
    // }

    if (inputOnes == '') {
        return;
    } else {
        fruits = document.createElement('li');
        fruits.innerText = inputOnes;
        newUl.appendChild(fruits);
        // cb();
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