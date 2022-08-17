// 달력/할일 버튼
const calBtn = document.querySelector('nav > ul > li:first-child'),
        todoBtn = document.querySelector('nav > ul > li:last-child');
let cal = document.querySelector('.cal'),
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
        const style = document.createElement('style');
        style.innerHTML = `
            .calender-control {
                display: flex;
                justify-content: center;
                margin-bottom: 15px;            
            }
            .calender-control > div:first-child, .calender-control > div:last-child {
                cursor: pointer;            
            }
            .calender-control > div:nth-child(2) {
                padding: 0 15px;
            }
            .calender {
                width: 100%;
                position: relative;
                border-collapse: collapse;
            }
            .calender > tbody > tr {
            }
            .calender > tbody > tr > th {
                width: calc(100% / 7);
                border: 1px solid black;
                height: 30px;
                line-height: 30px;
            }
            .calender > tbody > tr > td {
                border : 1px solid black;
                height: 87px;
                vertical-align: top;
            }
            .calender > tbody > tr > td > div {
                padding-top: 10px;
                padding-left: 10px;
            }
            .calender > tbody > tr > th:first-child, .calender > tbody > tr > td:first-child {
                color: red;
            }
            .calender > tbody > tr > th:last-child, .calender > tbody > tr > td:last-child {
                color: blue;
            }
            .not-month {
                color: lightgray;
            }
            .someday {
                color: red;
            }
            .name {
                text-align: right;
            }
            .today {
                background: rgba(255, 182, 193, 0.51);
            }
        `;
        document.head.appendChild(style);
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
                    <th>일</th>
                    <th>월</th>
                    <th>화</th>
                    <th>수</th>
                    <th>목</th>
                    <th>금</th>
                    <th>토</th>
                </tr>
            `;
        let prevMonthDay = new Date(year, month, 0).getDate(),
            date = new Date(year, month),
            startWeek = date.getDay();

        for (let i = startWeek - 1; i >= 0; i--) {
            table += `<td><div class="not-month">${prevMonthDay - i}</div></td>`;
        }

        while (date.getMonth() === month) {
            let someday = getHoliday(month, date.getDate()),
                today = '';

            if (toYear === year && toMonth == month && toDate == date.getDate()) {
                today = 'today';
            }

            table += someday ? `
                <td class="${today}">
                    <div class="someday">${date.getDate()}</div>
                    <div class="someday name">${someday}</div>
                </td>`
                : `
                <td class="${today}">
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
                        <td>
                            <div class="not-month">${day}</div></td>
                        `;
                }
            }

            table += '</tr></table>';

            elem.innerHTML = table;
            addEvent();
            setBackground();
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

    let setBackground = () => {
        let style = document.getElementById('clndr');

        if (!style) {
            style = document.createElement('style');
            style.id = 'clndr';
            document.head.appendChild(style);
        }

        let url, width, height, posX, posY;

        // switch (month) {
        //     case 11:
        //     case 0:
        //     case 1:
        //         url = "https://www.mfds.go.kr/webzine/202012/img/main_char_img02.png";
        //         width = "427px";
        //         height = "390px";
        //         posX = "right: 15px";
        //         posY = "bottom: 15px";
        //         break;
        //     case 2:
        //     case 3:
        //     case 4:
        //         url = "https://media.istockphoto.com/vectors/tulip-flower-clip-art-outline-with-yellow-cute-color-vector-animated-vector-id1369708250?k=20&m=1369708250&s=612x612&w=0&h=1qN7b9RI2kBZV9IRRs6lLw0wO9Pa7vnA9KQSP0ajW3Q=";
        //         width = "600px";
        //         height = "600px";
        //         posX = "left: -47px";
        //         posY = "bottom: -85px";
        //         break;
        //     case 5:
        //     case 6:
        //     case 7:
        //         url = "https://www.pngall.com/wp-content/uploads/2017/03/Summer-PNG-Picture.png";
        //         width = "512px";
        //         height = "512px";
        //         posX = "left: 36px";
        //         posY = "bottom: -89px";
        //         break;
        //     case 8:
        //     case 9:
        //     case 10:
        //         url = "https://freepngclipart.com/download/autumn/41506-leaf-color-tree-illustration-autumn-under-orange.png";
        //         width = "750px";
        //         height = "438px";
        //         posX = "right: 0px";
        //         posY = "bottom: 0px";
        //         break;
        // }
        style.innerHTML = `
            .calender::before {
                content: '';
                position: absolute;
                width: ${width};
                height: ${height};
                ${posX};
                ${posY};
                opacity: 0.5;
                z-index: -1;
                background-image: url(${url});
                background-repeat: no-repeat;
                background-position: 50% 50%;
                background-size: cover;
            }
        `;
    };
    this.showCalender = () => {
        init();
    };
}

let cc = new CreateCalender(document.querySelector('.cal'));
cc.showCalender();



// 투두리스트

const todoInput = document.querySelector('.todoInput'),
        todoInputBtn = document.querySelector('.todoInputBtn');
let list = [];


// 추가 & 삭제
todoInput.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        addTodo();
        e.preventDefault();
    }
    checkList();
    listCount();
});

todoInputBtn.addEventListener('click', addTodo);

let whatToDo = document.querySelector('.todoInput').value,
    todolist = document.querySelector('.todolist');

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
    }
    checkList();
    listCount();
}

// 체크박스
let listCheck = document.querySelectorAll('.listCheck'),
    listLb = document.querySelectorAll('.listLb');

function checkList() {
    listCheck = document.querySelectorAll('.listCheck');
    listLb = document.querySelectorAll('.listLb');
    listCheck.forEach((listEl, index) => listEl.addEventListener('click', () => {
        if (listEl.checked == true) {
            listLb[index].style.textDecoration = 'line-through';
            listLb[index].style.fontStyle = 'italic';
            listLb[index].style.color = 'gray';
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
let listAll = document.querySelectorAll('.todolist > li');

btnAll.addEventListener('click', () => {
    listAll = document.querySelectorAll('.todolist > li');
    listAll.forEach((eachList) => {
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
        console.log(listAll.length);
        if (listAll[i].style.display = '' == 1) {
            console.log('fsdfsdf');
            document.querySelector('.todolist > li:first-child').style.borderBottom = '0';
        }
        console.log('test');
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
        }
    } else {
        for (let i = 0; i < listCheck.length; i++) {
            listCheck[i].checked = false;
            listLb[i].style.textDecoration = '';
        } 
    }
    listCount();
});

delAll.addEventListener('click', () => {
    listCheck = document.querySelectorAll('.listCheck');
    listAll = document.querySelectorAll('.todolist > li');
    
    for (let i = 0; i < listCheck.length; i++) {
        if (listCheck[i].checked = true) {
            delete listAll[i];
        } else {
            return;
        }
    }
    selectAll.checked = false;
    listCount();
});