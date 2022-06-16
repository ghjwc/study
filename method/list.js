

function addFruits() {
    let fruits = [];

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
    del.innerText = 'DEL';
    
    del.onclick = function(e) {
        fruits.splice(0);
    }

    

    fruits.appendChild(del);
}

