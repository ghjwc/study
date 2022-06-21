let tableStyle = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'black'
};

let trStyle = {
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'black'
};

let tdStyle = {
    width: '50px',
    height: '50px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'black'
};

let table = document.createElement('table'); //node 객체

function MyTable() {
    let cntTr = 1;
    let cntTd = 1;
    let trRange = document.createElement('input');


    // 생성자 함수 첫 글자는 대문자
    this.init = function() {
        let showTrCnt = document.createElement('input');
        showTrCnt.type = 'text';
        showTrCnt.readOnly = true;

        showTrCnt.style.width = '50px';
        showTrCnt.style.height = '25px';
        showTrCnt.style.border = '1px solid';

        trRange.type = 'range';
        trRange.min = 1;
        trRange.max = 100;
        trRange.value = 1;
        trRange.oninput = function() {
            showTrCnt.value = trRange.value;
            cntTr = trRange.value;

            display();

        }

        document.body.appendChild(trRange);
        document.body.appendChild(showTrCnt);


        table.style.borderStyle = 'solid';
        table.style.borderWidth = '1px';
        table.style.borderColor = 'black';
        table.style.borderCollapse = 'collapse';
        Object.assign(table, tableStyle);
        
        display();
        
        document.body.appendChild(table);
    };

    let display = function() {
        table.innerHTML = '';

            for (let i = 0; i < cntTr; i++) {
                let tr = document.createElement('tr');
                Object.assign(tr, trStyle);
                for (let j = 0; j < cntTd; j++) {
                    let td = document.createElement('td');
                    td.style.borderStyle = 'solid';
                    td.style.borderWidth = '1px';
                    td.style.borderColor = 'black';
                    td.style.borderCollapse = 'collapse';
                    Object.assign(td, tdStyle);
                    tr.appendChild(td);
                }
                table.appendChild(tr);
            }
    }
}

let myTable = new MyTable();
myTable.init();