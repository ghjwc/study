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
    mobileSch.style.display = 'none';
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
    mobileSch.style.display = 'block';
})

// 달력
let date = new Date();
let calYear = date.getFullYear(),
    calMonth = date.getMonth() + 1,
    calDate = date.getDate();

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

            calYear = date.getFullYear(),
            calMonth = date.getMonth() + 1,
            calDate = date.getDate();

            if (calMonth < 10) {
                calMonth = '0' + calMonth;
            }

            if (calDate < 10) {
                calDate = '0' + calDate;
            }

            table += someday ? `
                <td class="${today} oneday" data-date="${calYear}-${calMonth}-${calDate}">
                    <div class="someday">${date.getDate()}</div>
                    <div class="someday name">${someday}</div>
                    <ul class="calTodo"></ul>
                </td>`
                : `
                <td class="${today} oneday" data-date="${calYear}-${calMonth}-${calDate}">
                    <div>${date.getDate()}</div>
                    <ul class="calTodo"></ul>
                </td>
                `;
            
            if (date.getDay() === 6) {
                table += '</tr><tr>';
            }
            date.setDate(date.getDate() + 1);
        }

        if (date.getDay()) {
            calYear = date.getFullYear(),
            calMonth = date.getMonth() + 1,
            calDate = date.getDate();

            for (let i = date.getDay(), day = 1; i < 7; i++, day++) {
                table += `
                    <td class="oneday" data-date="${calYear}-${calMonth}-${calDate}">
                        <div class="not-month">${day}</div>
                        <ul class="calTodo"></ul>
                    </td>
                    `;
            }
        }

        table += '</tr></table>';

        elem.innerHTML = table;
        addEvent();
    };


    let addEvent = () => {
        const todayDate = document.querySelector('.scheduleDiv > input[type="date"]');

        // let month1 = month;
    
        let prev = document.querySelector('.prev');
        prev.onclick = () => {
            // month1 = month;
            let strMonth = 0;

            month--;
            if (month < 0) {
                year--;
                month = 11;
            }
            display(year, month);
            

            // month = month + 1;
            strMonth = month + 1;
            if (strMonth < 10) {
                strMonth = '0' + strMonth;
            }
            
            todayDate.value = `${year}-${strMonth}-01`;
            // console.log('prev: ' + strMonth);
        }

        let next = document.querySelector('.next');
        next.onclick = () => {
            // month = month;
            let strMonth = 0;
            

            month++;
            if (month >= 12) {
                year++;
                month = 0;
            }
            display(year, month);
            // console.log('month: ' + month);

            // month1 = month + 1;
            strMonth = month + 1;
            
            if (strMonth < 10) {
                strMonth = '0' + strMonth;
                // console.log(strMonth);
            }
            todayDate.value = `${year}-${strMonth}-01`;
            // console.log('strMonth: ' + strMonth);
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
const mobileSch = document.querySelector('.mobileSch'),
        mobileSchBtn = document.querySelector('.mobileSchBtn'),
        mobileSchedule = document.querySelector('.schedule'),
        mobileScheduleClose = document.querySelector('.scheduleDiv > button:last-child');

mobileSchBtn.addEventListener('click', () => {
    mobileSchedule.style.position = 'fixed';
    mobileSchedule.style.opacity = '1';
    mobileSchedule.style.visibility = 'visible';
});

mobileScheduleClose.addEventListener('click', () => {
    mobileSchedule.style.opacity = '0';
    mobileSchedule.style.visibility = 'hidden';
});


// input[type='date']에 오늘 날짜 입력
const todayDate = document.querySelector('.scheduleDiv > input[type="date"]'),
        scheduleInput = document.querySelector('.scheduleDiv > input[type="text"]'),
        scheduleBtn = document.querySelector('.scheduleDiv > button');
let oneday = document.querySelectorAll('.oneday');

todayDate.value = new Date().toISOString().substring(0, 10);


// 달력에 메모 쓰기
let calTodo = document.querySelectorAll('.calTodo');

scheduleInput.addEventListener('keyup', (e) => {
    if (e.keyCode == 13) {
        addSchedule();
        e.preventDefault;
    }
});

scheduleBtn.addEventListener('click', addSchedule);


function addSchedule() {
    oneday = document.querySelectorAll('.oneday');
    if (!scheduleInput.value) {
        return;
    } else {
        for (let i = 0; i < oneday.length; i++) {
            // console.log(todayDate.value + ':' + oneday[i].dataset.date);
            if (todayDate.value == oneday[i].dataset.date) {
                // console.log(todayDate.value);

                if (!oneday[i].querySelector('.name')) {
                    oneday[i].querySelector('.calTodo').innerHTML += `
                    <li>
                        ㆍ${scheduleInput.value}
                    </li>
                    `;
                    break;
                } else {
                    oneday[i].querySelector('.calTodo').style.top = '6.5rem';
                    oneday[i].querySelector('.calTodo').style.height = '3.5rem';
                    oneday[i].querySelector('.calTodo').innerHTML += `
                    <li>
                        ㆍ${scheduleInput.value}
                    </li>
                    `;
                    break;
                }
            }
        }
    }
    scheduleInput.value = '';
}

// 날짜 연동

todayDate.addEventListener('change', () => {
    const splitDate = todayDate.value.split('-');
    console.log('change-splitDateMonth: ' + splitDate[1]);
})