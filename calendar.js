function CreateCalender(elem) {
    let now = new Date();
    let toYear = year = now.getFullYear();
    let toMonth = month = now.getMonth();
    let toDate = now.getDate();
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
            name: '개천철'
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
    let init = function () {
        const style = document.createElement('style');
        //스타일 적용
        //https://www.javascripttutorial.net/dom/css/add-styles-to-an-element/
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
    let display = function (year, month) {
        let table = `
            <div class="calender-control">
                <div class="prev">◀</div>
                <div>${year}년 ${month + 1}월</div>
                <div class="next">▶</div>
            </div>
            <table class='calender'>
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
        let prevMonthDay = new Date(year, month, 0).getDate();
        let date = new Date(year, month);
        let startWeek = date.getDay();

        for (let i = startWeek - 1; i >= 0; i--) {
            table += `<td><div class="not-month">${prevMonthDay - i}</div></td>`;
        }

        while (date.getMonth() === month) {
            let someday = getHoliday(month, date.getDate());
            let today = "";

            if (toYear === year && toMonth == month && toDate == date.getDate()) {
                today = "today";
            }

            table += someday ?
                `<td class="${today}"><div class="someday">${date.getDate()}</div><div class="someday name">${someday}</div></td>` :
                `<td class="${today}"><div>${date.getDate()}</div></td>`;
            if (date.getDay() === 6) {
                table += "</tr><tr>";
            }
            date.setDate(date.getDate() + 1);
        }

        if (date.getDay()) {
            for (let i = date.getDay(), day = 1; i < 7; i++, day++) {
                table += `<td><div class='not-month'>${day}</div></td>`;
            }
        }

        table += "</tr></table>";

        elem.innerHTML = table;
        addEvent();
        setBackground();
    };
    let addEvent = function () {
        let prev = document.querySelector('.prev');
        prev.onclick = function () {
            month--;
            if (month <= 0) {
                year--;
                month = 11;
            }
            display(year, month);
        }
        let next = document.querySelector('.next');
        next.onclick = function () {
            month++;
            if (month >= 12) {
                year++;
                month = 0;
            }
            display(year, month);
        }
    }
    let getHoliday = function (month, date) {
        let name = null;
        holidays.forEach(function (val, i) {
            if (val.month == (month + 1) && val.day == date) {
                name = val.name;
            }
        });
        return name;
    };
    let setBackground = function () {
        let style = document.getElementById('clndr');
        if (!style) {
            style = document.createElement('style');
            style.id = 'clndr';
            document.head.appendChild(style);
        }
        let url, width, height, posX, posY;
        switch (month) {
            case 11:
            case 0:
            case 1:
                url = "https://www.mfds.go.kr/webzine/202012/img/main_char_img02.png";
                width = "427px";
                height = "390px";
                posX = "right: 15px";
                posY = "bottom: 15px";
                break;
            case 2:
            case 3:
            case 4:
                url = "https://media.istockphoto.com/vectors/tulip-flower-clip-art-outline-with-yellow-cute-color-vector-animated-vector-id1369708250?k=20&m=1369708250&s=612x612&w=0&h=1qN7b9RI2kBZV9IRRs6lLw0wO9Pa7vnA9KQSP0ajW3Q=";
                width = "600px";
                height = "600px";
                posX = "left: -47px";
                posY = "bottom: -85px";
                break;
            case 5:
            case 6:
            case 7:
                url = "https://www.pngall.com/wp-content/uploads/2017/03/Summer-PNG-Picture.png";
                width = "512px";
                height = "512px";
                posX = "left: 36px";
                posY = "bottom: -89px";
                break;
            case 8:
            case 9:
            case 10:
                url = "https://freepngclipart.com/download/autumn/41506-leaf-color-tree-illustration-autumn-under-orange.png";
                width = "750px";
                height = "438px";
                posX = "right: 0px";
                posY = "bottom: 0px";
                break;
        }
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
    this.showCalender = function () {
        init();
    };
}

let cc = new CreateCalender(document.getElementById("cal"));
cc.showCalender();

//음력
//http://www.joshi.co.kr/index.php?mid=board_XbwP90&document_srl=594