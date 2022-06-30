for(let elem of document.querySelectorAll('*')) {
    elem.addEventListener("click", e => console.log(`캡쳐링: ${elem.tagName}`), true);
    elem.addEventListener("click", e => console.log(`버블링: ${elem.tagName}`));
  }

let div = document.querySelector('div');
div.addEventListener('click', function(e) {
    console.log(e.target.tagName);
})

let p = document.querySelector('p');

p.addEventListener('click', function(e) {
    console.log(e.target.tagName);
    e.stopPropagation();
})



class Menu {
  constructor(elem) {
    this._elem = elem;
    elem.onclick = this.onClick.bind(this); // (*)
  }

  save() {
    alert('저장하기');
  }

  load() {
    alert('불러오기');
  }

  search() {
    alert('검색하기');
  }

  onClick(event) {
    let action = event.target.dataset.action;
    if (action) {
      this[action]();
    }
  };
}

let myMenu = new Menu(menu);
console.log(myMenu._elem);


let tree = document.querySelector('.tree');
let li = document.querySelectorAll('li');

console.log(li);

for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
}

console.log(tree);

tree.onclick = function(event) {
    if (event.target.tagName != 'SPAN') {
        return;
    }

    let childrenContainer = event.target.parentNode.querySelector('ul');

    if (!childrenContainer) return;

    childrenContainer.hidden = !childrenContainer.hidden;
}