
// 투두리스트

const todoInput = document.querySelector('.todoInput'),
        todoInputBtn = document.querySelector('.todoInputBtn');

let list = [],
    listAll = document.querySelectorAll('.todolist > li'),
    whatToDo = document.querySelector('.todoInput').value,
    todolist = document.querySelector('.todolist'),
    listCheck = document.querySelectorAll('.listCheck'),
    listLb = document.querySelectorAll('.listLb');

function startTodo() {
    if (listAll.length == 0) {
        todolist.innerHTML = `<div class="yet">아직 일정이 없습니다.</div>`
    } else {
        document.querySelector('.yet').style.display = 'none';
    }
}
startTodo();


// 추가 & 삭제
todoInput.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        addTodo();
        e.preventDefault();
    }
    startTodo();
    checkList();
    listCount();
});

todoInputBtn.addEventListener('click', addTodo);


function addTodo() {
    whatToDo = document.querySelector('.todoInput').value;
    todolist = document.querySelector('.todolist');

    if (whatToDo == '') {
        return;
    } else {
        list = document.createElement('li');
        list.innerHTML = `<label class="listLb"><input type="checkbox" class="listCheck">${whatToDo}</label>`;
        todolist.appendChild(list);
        todoInput.value = '';
        todoInput.focus();
    }

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '&times';
    list.appendChild(delBtn);

    delBtn.onclick = (e) => {
        let pnode = e.target.parentNode;
        todolist.removeChild(pnode);
        listCount();
    }
    checkList();
    listCount();
    startTodo();
}

// 체크박스

function checkList() {
    listCheck = document.querySelectorAll('.listCheck');
    listLb = document.querySelectorAll('.listLb');
    listCheck.forEach((listEl, index) => listEl.addEventListener('click', () => {
        if (listEl.checked == true) {
            listLb[index].style.textDecoration = 'line-through';
            listLb[index].style.fontStyle = 'italic';
            listLb[index].style.color = 'lightskyblue';
        } else {
            listLb[index].style.textDecoration = 'none';
            listLb[index].style.fontStyle = '';
            listLb[index].style.color = '';
        }
        listCount();
    }));
}

// 전체 & 진행 중 & 완료
const btnAll = document.querySelector('.btnAll'),
        btnIng = document.querySelector('.btnIng'),
        btnEd = document.querySelector('.btnEd');

btnAll.addEventListener('click', () => {
    listAll = document.querySelectorAll('.todolist > li');
    listAll.forEach(eachList => {
        eachList.style.display = '';
    });
});

btnIng.addEventListener('click', () => {
    listCheck = document.querySelectorAll('.listCheck');
    listAll = document.querySelectorAll('.todolist > li');
    for (let i = 0; i < listCheck.length; i++) {
        if (listCheck[i].checked == true) {
            listAll[i].style.display = 'none';
        } else {
            listAll[i].style.display = '';
        }
    }
});

btnEd.addEventListener('click', () => {
    listCheck = document.querySelectorAll('.listCheck');
    listAll = document.querySelectorAll('.todolist > li');
    for (let i = 0; i < listAll.length; i++) {
        if (listCheck[i].checked == true) {
            listAll[i].style.display = '';
        } else {
            listAll[i].style.display = 'none';
        }
    }
});

const btnDiv = document.querySelectorAll('.btnDiv > input');

for (let i = 0; i < btnDiv.length; i++) {
    btnDiv[i].addEventListener('click', () => {
        listAll = document.querySelectorAll('.todolist > li');
        let j = 0,
            k = 0,
            total = listAll.length;
        
        listAll.forEach(list => {
            if (list.style.display == 'none') j++;
        });

        total -= j;

        listAll.forEach(list => {
            if (list.style.display != 'none') k++;
            if ((list.style.display == 'block' || list.style.display == '') && total == k) {
                list.style.borderBottom = 'none';
            }
        });
    });
}

// 건수 조회
function listCount() {
    listAll = document.querySelectorAll('.todolist > li');
    let ingArr = [],
        edArr = [];

    for (let i = 0; i < listAll.length; i++) {
        if (listCheck[i].checked == false) {
            ingArr.push(listAll[i]);
        } else {
            edArr.push(listAll[i]);
        }
    }

    let allCnt = (ingArr.length + edArr.length),
        ingCnt = ingArr.length,
        edCnt = edArr.length;
    
    btnAll.value = `전체 (${allCnt})`;
    btnIng.value = `진행 중 (${ingCnt})`;
    btnEd.value = `완료 (${edCnt})`;
}

// 전체 선택
const selectAll = document.querySelector('#selectAll'),
        delAll = document.querySelector('.delAll');

selectAll.addEventListener('click', () => {
    listCheck = document.querySelectorAll('.listCheck');
    listLb = document.querySelectorAll('.listLb');

    if (selectAll.checked == true) {
        for (let i = 0; i < listCheck.length; i++) {
            listCheck[i].checked = true;
            listLb[i].style.textDecoration = 'line-through';
            listLb[i].style.fontStyle = 'italic';
            listLb[i].style.color = 'lightskyblue';
        }
    } else {
        for (let i = 0; i < listCheck.length; i++) {
            listCheck[i].checked = false;
            listLb[i].style.textDecoration = '';
            listLb[i].style.fontStyle = '';
            listLb[i].style.color = 'gray';
        } 
    }
    listCount();
});

delAll.addEventListener('click', () => {
    listCheck = document.querySelectorAll('.listCheck');
    listAll = document.querySelectorAll('.todolist > li');
    
    for (let i = 0; i < listCheck.length; i++) {
        if (listCheck[i].checked == true) {
            listAll[i].remove();
        } else {
            return;
        }
        selectAll.checked = false;
    }
    listCount();
    startTodo();
});