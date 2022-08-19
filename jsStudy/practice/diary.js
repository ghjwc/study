// 달력/할일 버튼
const calBtn = document.querySelector('nav > ul > li:first-child'),
        todoBtn = document.querySelector('nav > ul > li:last-child');
let cal = document.querySelector('.cal'),
    schedule = document.querySelector('.schedule'),
    todo = document.querySelector('.todo');

todoBtn.addEventListener('click', () => {
    todoBtn.style.border = '0.1rem solid lightgray';
    todoBtn.style.color = 'white';
    todoBtn.style.background = 'linear-gradient(0deg, rgba(183,249,255,1) 0%, rgba(136,229,250,1) 63%, rgba(183,249,255,1) 100%)';
    calBtn.style.borderStyle = 'none';
    calBtn.style.color = 'lightskyblue';
    calBtn.style.background = 'transparent';

    todo.style.display = 'block';
    cal.style.display = 'none';
    schedule.style.display = 'none';
})

calBtn.addEventListener('click', () => {
    calBtn.style.border = '0.1rem solid lightgray';
    calBtn.style.color = 'white';
    calBtn.style.background = 'linear-gradient(0deg, rgba(183,249,255,1) 0%, rgba(136,229,250,1) 63%, rgba(183,249,255,1) 100%)';
    todoBtn.style.borderStyle = 'none';
    todoBtn.style.color = 'lightskyblue';
    todoBtn.style.background = 'transparent';

    todo.style.display = 'none';
    cal.style.display = 'block';
    schedule.style.display = 'block';
})

// 달력

function CreateCalender(elem) {

    let now = new Date(),
        toYear = year = now.getFullYear(),
        toMonth = month = now.getMonth(),
        toDate = now.getDate();
    
    let holidays = [
        {
            month: 1,
            day: 1,
            name: '신정'
        },
        {
            month: 3,
            day: 1,
            name: '3ㆍ1절'
        },
        {
            month: 5,
            day: 5,
            name: '어린이날'
        },
        {
            month: 6,
            day: 6,
            name: '현충일'
        },
        {
            month: 8,
            day: 15,
            name: '광복절'
        },
        {
            month: 10,
            day: 3,
            name: '개천절'
        },
        {
            month: 10,
            day: 9,
            name: '한글날'
        },
        {
            month: 12,
            day: 25,
            name: '성탄절'
        },
    ];

    let init = () => {
        display(year, month);
    }

    let display = (year, month) => {
        let table = `
            <div class="calendar-control">
                <div class="prev">&#60;</div>
                <div>${year}년 ${month + 1}월</div>
                <div class="next">&#62;</div>
            </div>
            <table class="calendar">
                <tr>
                    <th class="dayTh">일</th>
                    <th class="dayTh">월</th>
                    <th class="dayTh">화</th>
                    <th class="dayTh">수</th>
                    <th class="dayTh">목</th>
                    <th class="dayTh">금</th>
                    <th class="dayTh">토</th>
                </tr>
            `;
        let prevMonthDay = new Date(year, month, 0).getDate(),
            date = new Date(year, month),
            startWeek = date.getDay();

        for (let i = startWeek - 1; i >= 0; i--) {
            table += `
                <td class="oneday">
                    <div class="not-month">${prevMonthDay - i}</div>
                </td>
            `;
        }

        while (date.getMonth() === month) {
            let someday = getHoliday(month, date.getDate()),
                today = '';

            if (toYear === year && toMonth == month && toDate == date.getDate()) {
                today = 'today';
            }

            table += someday ? `
                <td class="${today} oneday">
                    <div class="someday">${date.getDate()}</div>
                    <div class="someday name">${someday}</div>
                </td>`
                : `
                <td class="${today} oneday">
                    <div>${date.getDate()}</div>
                </td>
                `;
            
            if (date.getDay() === 6) {
                table += '</tr><tr>';
            }
            date.setDate(date.getDate() + 1);
        }

        if (date.getDay()) {
            for (let i = date.getDay(), day = 1; i < 7; i++, day++) {
                table += `
                    <td class="oneday">
                        <div class="not-month">${day}</div>
                    </td>
                    `;
            }
        }

        table += '</tr></table>';

        elem.innerHTML = table;
        addEvent();
    };

    let addEvent = () => {
        let prev = document.querySelector('.prev');
        prev.onclick = () => {
            month--;
            if (month <= 0) {
                year--;
                month = 11;
            }
            display(year, month);
        }

        let next = document.querySelector('.next');
        next.onclick = () => {
            month++;
            if (month >= 12) {
                year++;
                month = 0;
            }
            display(year, month);
        }
    }

    let getHoliday = (month, date) => {
        let name = null;
        holidays.forEach((val, i) => {
            if (val.month == (month + 1) && val.day == date) {
                name = val.name;
            }
        });
        return name;
    };

    this.showCalender = () => {
        init();
    };
}

let cc = new CreateCalender(document.querySelector('.cal'));
cc.showCalender();


// 달력 아래 스케줄
const todayDate = document.querySelector('.scheduleDiv > input[type="date"]'),
        scheduleInput = document.querySelector('.scheduleDiv > input[type="text"]'),
        scheduleBtn = document.querySelector('.scheduleDiv > button');
let oneday = document.querySelectorAll('.oneday');

todayDate.value = new Date().toISOString().substring(0, 10);

scheduleInput.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        console.log(scheduleInput.value);
        e.preventDefault;
    }
});

scheduleBtn.addEventListener('click', () => {
    if (!scheduleInput.value) {
        return;
    } else {
        console.log(scheduleInput.value);
    }
});

function addSchedule() {

}


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
    }
    listCount();
    startTodo();
});